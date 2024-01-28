import {
  AST,
  hasDescription,
  hasStandaloneName,
  TAny,
  TInterface,
  TUnion,
} from './types/AST';

export function generate(ast: AST): string {
  switch (ast.type) {
    case 'INTERFACE':
      return generateInterfaceCode(ast);
    default:
      return generateTypeCode(ast);
  }
}

function generateTypeCode(ast: AST): string {
  if (!hasStandaloneName(ast)) return '';

  return (
    (hasDescription(ast) ? generateDescription(ast.description) + '\n' : '') +
    `export type ${ast.standaloneName} = ${generateRawType(ast)}`
  );
}

function generateInterfaceCode(ast: TInterface) {
  return (
    (hasDescription(ast) ? generateDescription(ast.description) + '\n' : '') +
    `export interface ${ast.standaloneName}` +
    generateInterfaceParamsCode(ast)
  );
}

function generateInterfaceParamsCode(ast: TInterface) {
  return (
    `{` +
    '\n' +
    ast.params
      .map((param) => {
        const type = generateRawType(param.ast);
        return (
          (param.description
            ? generateDescription(param.description) + '\n'
            : '') +
          (param.isReadOnly ? 'readOnly ' : '') +
          escapeKeyName(param.keyName) +
          (param.isRequired ? '' : '?') +
          ': ' +
          type
        );
      })
      .join('\n') +
    '\n' +
    '}'
  );
}

function escapeKeyName(keyName: string): string {
  if (
    keyName.length &&
    /[A-Za-z_$]/.test(keyName.charAt(0)) &&
    /^[\w$]+$/.test(keyName)
  ) {
    return keyName;
  }
  return JSON.stringify(keyName);
}

function generateDescription(description: string): string {
  return ['/**', ...description.split('\n').map((_) => ' * ' + _), ' */'].join(
    '\n',
  );
}

function generateRawType(ast: AST): string {
  switch (ast.type) {
    case 'STRING':
      return 'string';
    case 'NUMBER':
      return 'number';
    case 'BOOLEAN':
      return 'boolean';
    case 'OBJECT':
      return 'object';
    case 'NULL':
      return 'null';
    case 'ANY':
      return 'any';
    case 'LITERAL':
      return JSON.stringify(ast.params);
    case 'REFERENCE':
      return ast.refStandaloneName || '';

    case 'ARRAY':
      return (() => {
        const type = generateRawType(ast.params);
        return type.endsWith('"') ? '(' + type + ')[]' : type + '[]';
      })();
    case 'TUPLE':
      return (() => {
        const minItems = ast.minItems;
        const maxItems = ast.maxItems || -1;
        const astParams = [...ast.params];
        let spreadParam: TAny;

        if (minItems > 0 && minItems > astParams.length) {
          // this is a valid state, and JSONSchema doesn't care about the item type
          if (maxItems < 0) {
            // no max items and no spread param, so just spread any
            spreadParam = { type: 'ANY' };
          }
        }
        if (maxItems > astParams.length) {
          // this is a valid state, and JSONSchema doesn't care about the item type
          // fill the tuple with any elements
          for (let i = astParams.length; i < maxItems; i += 1) {
            astParams.push({ type: 'ANY' });
          }
        }

        function addSpreadParam(params: string[]): string[] {
          if (spreadParam) {
            const spread = '...(' + generateRawType(spreadParam) + ')[]';
            params.push(spread);
          }
          return params;
        }

        function paramsToString(params: string[]): string {
          return '[' + params.join(', ') + ']';
        }

        const paramsList = astParams.map((param) => generateRawType(param));

        if (paramsList.length > minItems) {
          /*
            if there are more items than the min, we return a union of tuples instead of
            using the optional element operator. This is done because it is more typesafe.
    
            // optional element operator
            type A = [string, string?, string?]
            const a: A = ['a', undefined, 'c'] // no error
    
            // union of tuples
            type B = [string] | [string, string] | [string, string, string]
            const b: B = ['a', undefined, 'c'] // TS error
            */

          const cumulativeParamsList: string[] = paramsList.slice(0, minItems);
          const typesToUnion: string[] = [];

          if (cumulativeParamsList.length > 0) {
            // actually has minItems, so add the initial state
            typesToUnion.push(paramsToString(cumulativeParamsList));
          } else {
            // no minItems means it's acceptable to have an empty tuple type
            typesToUnion.push(paramsToString([]));
          }

          for (let i = minItems; i < paramsList.length; i += 1) {
            cumulativeParamsList.push(paramsList[i]);

            if (i === paramsList.length - 1) {
              // only the last item in the union should have the spread parameter
              addSpreadParam(cumulativeParamsList);
            }

            typesToUnion.push(paramsToString(cumulativeParamsList));
          }

          return typesToUnion.join('|');
        }

        // no max items so only need to return one type
        return paramsToString(paramsList);
      })();

    case 'UNION':
    case 'INTERSECTION':
      return (() => {
        const members = (ast as TUnion).params.map((param) =>
          generateRawType(param),
        );
        const separator = ast.type === 'UNION' ? '|' : '&';
        return members.length === 1
          ? members[0]
          : '(' + members.join(' ' + separator + ' ') + ')';
      })();

    case 'INTERFACE':
      return generateInterfaceParamsCode(ast);

    case 'FILE':
      return 'File';
  }
}
