import type { JSONSchema } from './types/AST';
import type { CompiledStandardModel } from '../types/standardModel';

import { parse } from './parse';
import { generate } from './generate';

export type CompileSchemaResult = {
  standaloneName: string;
  referencePaths: string[];
  schema: JSONSchema;
  getCodeStr: () => string;
};

export function compileSchema(
  schema?: JSONSchema,
): CompileSchemaResult | undefined {
  if (!schema) return undefined;

  /** parse */
  const { standaloneName, referencePath, ast } = parse(schema);

  return {
    standaloneName,
    referencePaths: Array.from(referencePath),
    schema,
    getCodeStr: () => generate(ast),
  };
}

export function getReferenceCodeStr(
  compiledStandardModel: CompiledStandardModel,
  compileSchemaResults?: (CompileSchemaResult | undefined)[],
) {
  const dereferencePathMap = compiledStandardModel.dereferencePathMap;
  let schemaRefs: string[] = [];
  let pathMapRefs: string[] = [];

  if (Array.isArray(compileSchemaResults)) {
    compileSchemaResults.forEach((res) => {
      if (res) {
        schemaRefs = schemaRefs.concat(res.referencePaths);
      }
    });
  }

  schemaRefs.forEach((path) => {
    pathMapRefs = pathMapRefs.concat(
      dereferencePathMap.get(path)?.referencePaths ?? [],
    );
  });

  return [...new Set([...schemaRefs, ...pathMapRefs])].map(
    (path) => dereferencePathMap.get(path)?.getCodeStr() ?? '',
  );
}
