/**
 *
 */

import type {
  JSONSchema7,
  JSONSchema7Type,
  JSONSchema7Definition,
} from 'json-schema';

export type JSONSchema = JSONSchema7;
export type JSONSchemaType = JSONSchema7Type;
export type JSONSchemaDefinition = JSONSchema7Definition;

const a: JSONSchemaType = { a: 1 };

console.log(a);

export type SimpleType = TString | TNumber | TBoolean | TObject | TNull;
export type ArrayType = TArray | TTuple;

export type ParamAST =
  | Omit<TString, 'standaloneName,description'>
  | Omit<TNumber, 'standaloneName,description'>
  | Omit<TBoolean, 'standaloneName,description'>
  | Omit<TObject, 'standaloneName,description'>
  | Omit<TNull, 'standaloneName,description'>
  //
  | Omit<TArray, 'standaloneName,description'>
  | Omit<TTuple, 'standaloneName,description'>
  //
  | Omit<TUnion, 'standaloneName,description'>
  | Omit<TIntersection, 'standaloneName,description'>
  | Omit<TAny, 'standaloneName,description'>
  | Omit<TLiteral, 'standaloneName,description'>;

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
  | TEnum
  | TReference
  | TInterface;

export type AST_TYPE = AST['type'];

/**
 * standaloneName - 表示是一个独立的类型
 */
export interface AbstractAST {
  type: AST_TYPE;
  description?: string;
}

/** Params */

/** Simple Type */

export interface TString extends AbstractAST {
  type: 'STRING';
  standaloneName: string;
  format?: string | undefined;
  contentMediaType?: string | undefined;
  contentEncoding?: string | undefined;
}

export interface TNumber extends AbstractAST {
  type: 'NUMBER';
  standaloneName: string;
}

export interface TBoolean extends AbstractAST {
  type: 'BOOLEAN';
  standaloneName: string;
}

export interface TObject extends AbstractAST {
  type: 'OBJECT';
  standaloneName: string;
}

export interface TNull extends AbstractAST {
  type: 'NULL';
  standaloneName: string;
}

/** Array Type */
export interface TArray extends AbstractAST {
  type: 'ARRAY';
  standaloneName: string;
  params: ParamAST | TAny;
}

export interface TTuple extends AbstractAST {
  type: 'TUPLE';
  standaloneName: string;
  params: ParamAST[];
  minItems: number;
  maxItems?: number | undefined;
}

/** Union & INTERSECTION */
export interface TUnion extends AbstractAST {
  type: 'UNION';
  standaloneName: string;
  params: AST[];
}

export interface TIntersection extends AbstractAST {
  type: 'INTERSECTION';
  standaloneName: string;
  params: AST[];
}

/** Literal 字面量类型 */
export interface TLiteral {
  type: 'LITERAL';
  params: JSONSchemaType;
}

/** ANY */
export interface TAny extends AbstractAST {
  type: 'ANY';
}

export const T_ANY: TAny = {
  type: 'ANY',
};

/** ENUM */
export interface TEnum extends AbstractAST {
  type: 'ENUM';
  standaloneName: string;
  params: AST[];
}

/** Reference */
export interface TReference {
  type: 'REFERENCE';
  refName: string; // ObjectName | ObjectName[PropertiesName][...]
}

/** Interface  */
export interface TInterface extends AbstractAST {
  type: 'INTERFACE';
  standaloneName: string;
  params: TInterfaceParam[];
}

export interface TInterfaceParam {
  ast: ParamAST;
  keyName: string;
  description?: string | undefined;
  isRequired?: boolean | undefined;
  isReadOnly?: boolean | undefined;
}
