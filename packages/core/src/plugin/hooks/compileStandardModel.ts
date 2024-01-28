import { get } from 'lodash/fp';

import type { JSONSchema } from '../../schemaCompile/types/AST';
import type {
  CompiledStandardModel,
  CompiledStandardModelApi,
  StandardModel,
} from '../../types/standardModel';

import { compileSchema } from '../../schemaCompile';
import { justName } from '../../utils';

export function compileStandardModel(
  standardModel: StandardModel,
): CompiledStandardModel {
  let referencePaths: string[] = [];

  const definitions = standardModel.definitions;

  const compiledApis: CompiledStandardModel['apis'] = standardModel.apis.map(
    (api) => {
      const parameters: CompiledStandardModelApi['parameters'] = {};
      const requestBody: CompiledStandardModelApi['requestBody'] = {};
      const responses: CompiledStandardModelApi['responses'] = {};

      Object.entries(api.parameters ?? {}).forEach(([position, value]) => {
        if (!value) return;
        const compileResult = compileSchema(value.schema);
        referencePaths = referencePaths.concat(
          compileResult?.referencePaths ?? [],
        );
        parameters[position] = compileResult;
      });

      Object.entries(api.requestBody ?? {}).forEach(([mediaType, value]) => {
        if (!value) return;
        const compileResult = compileSchema(value.schema);
        referencePaths = referencePaths.concat(
          compileResult?.referencePaths ?? [],
        );
        requestBody[mediaType] = compileResult;
      });

      Object.entries(api.responses ?? {}).forEach(
        ([responseCode, responseCodeValue]) => {
          Object.entries(responseCodeValue ?? {}).forEach(
            ([mediaType, value]) => {
              if (!value) return;
              const compileResult = compileSchema(value.schema);
              referencePaths = referencePaths.concat(
                compileResult?.referencePaths ?? [],
              );
              responses[responseCode] = {
                ...responses[responseCode],
                [mediaType]: compileResult,
              };
            },
          );
        },
      );

      return { ...api, parameters, requestBody, responses };
    },
  );

  const dereferencePathMap: CompiledStandardModel['dereferencePathMap'] =
    new Map();
  function patchDereferencePathMap(refPahts: string[]) {
    let definitionsRefPaths: string[] = [];

    refPahts.forEach((path) => {
      if (dereferencePathMap.has(path)) return;

      const pathParse = path.split('/').slice(1).join('.');
      const definition = (get(pathParse, definitions) as JSONSchema) ?? {
        type: 'any',
      };
      definition.title = justName(path);
      const compileSchemaResult = compileSchema(definition);
      definitionsRefPaths = definitionsRefPaths.concat(
        compileSchemaResult?.referencePaths ?? [],
      );
      dereferencePathMap.set(path, compileSchemaResult);
    });

    if (definitionsRefPaths.length > 0) {
      patchDereferencePathMap(definitionsRefPaths);
    }
  }

  patchDereferencePathMap(referencePaths);

  return { ...standardModel, apis: compiledApis, dereferencePathMap };
}
