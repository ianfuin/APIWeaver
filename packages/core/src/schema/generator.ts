import { AST, AST_TYPE, TInterface } from './types/AST';

export function generate(ast: AST): string {
  return generateNameType(ast);
}

/** STRING、NUMBER、BOOLEAN */
function generateBaseType() {}

/** OBJECT、ARRAY、TUPLE */
function generateObjectType() {}

/** INTERFACE、ENUM */
function generateNameType(ast: AST): string {
  if (ast.type === 'INTERFACE') {
    return `interface ${ast.standaloneName}`;
  }
}

/** UNION */
function generateUnionType() {}

function astTypeToString(type: AST_TYPE) {
  switch (type) {
    case 'STRING':
      return 'string';
    case 'NUMBER':
      return 'number';
    case 'BOOLEAN':
      return 'boolean';
    case 'ARRAY':
    case 'TUPLE':
      return 'Array';
    case 'INTERFACE':
      return 'interface';
    case 'ENUM':
      return 'enum';
    default:
      break;
  }
}

function generateInterface(ast: TInterface): string {
  return (
    generateDescription(ast.description) +
    `export interface ${ast.standaloneName} ` +
    `{` +
    '\n' +
    ast.params
      .map((param) => {
        return generateDescription(param.ast.description) + `${param.ast.type}`;
      })
      .join('\n') +
    '\n' +
    '}'
  );
}

function generateDescription(description: string): string {
  if (!description) return '';
  return (
    ['/**', ...description.split('\n').map((_) => ' * ' + _), ' */'].join(
      '\n',
    ) + '\n'
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
  if (keyName === '[k: string]') {
    return keyName;
  }
  return JSON.stringify(keyName);
}
