import type {
  JSONSchema7,
  JSONSchema7Type,
  JSONSchema7TypeName,
  JSONSchema7Definition,
} from 'json-schema';

export type JSONSchema = JSONSchema7;
export type JSONSchemaType = JSONSchema7Type;
export type JSONSchemaTypeName = JSONSchema7TypeName;
export type JSONSchemaDefinition = JSONSchema7Definition;

export type AST =
  | TString
  | TNumber
  | TBoolean
  | TObject
  | TNull
  //
  | TArray
  | TTuple
  //
  | TUnion
  | TIntersection
  | TAny
  | TLiteral
  //
  | TReference
  | TInterface;

export type AST_TYPE = AST['type'];

export type ASTWithStandaloneName = AST & { standaloneName: string };
export type ASTWithDescription = AST & { description: string };

export function hasDescription(ast: AST): ast is ASTWithDescription {
  return (
    'description' in ast && ast.description != null && ast.description !== ''
  );
}

export function hasStandaloneName(ast: AST): ast is ASTWithStandaloneName {
  return (
    'standaloneName' in ast &&
    ast.standaloneName != null &&
    ast.standaloneName !== ''
  );
}

/**
 * standaloneName - 表示是一个独立的类型
 */
export interface AbstractAST {
  type: AST_TYPE;
  description?: string;
  standaloneName?: string;
}

/** Params */

/** Simple Type */

export interface TString extends AbstractAST {
  type: 'STRING';
  format?: string;
  contentMediaType?: string;
  contentEncoding?: string;
}

export interface TNumber extends AbstractAST {
  type: 'NUMBER';
}

export interface TBoolean extends AbstractAST {
  type: 'BOOLEAN';
}

export interface TObject extends AbstractAST {
  type: 'OBJECT';
}

export interface TNull extends AbstractAST {
  type: 'NULL';
}

/** Array Type */
export interface TArray extends AbstractAST {
  type: 'ARRAY';
  params: AST;
}

export interface TTuple extends AbstractAST {
  type: 'TUPLE';
  params: AST[];
  minItems: number;
  maxItems?: number;
}

/** Union & INTERSECTION */
export interface TUnion extends AbstractAST {
  type: 'UNION';
  params: AST[];
}

export interface TIntersection extends AbstractAST {
  type: 'INTERSECTION';
  params: AST[];
}

/** Literal 字面量类型 */
export interface TLiteral {
  type: 'LITERAL';
  params: JSONSchemaType | 'any';
}

/** ANY */
export interface TAny extends AbstractAST {
  type: 'ANY';
}

/** Reference */
export interface TReference extends AbstractAST {
  type: 'REFERENCE';
}

/** Interface  */
export interface TInterface extends AbstractAST {
  type: 'INTERFACE';
  params: TInterfaceParam[];
}

export interface TInterfaceParam {
  ast: AST;
  keyName: string;
  description?: string;
  isRequired?: boolean;
  isReadOnly?: boolean;
}
