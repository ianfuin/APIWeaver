import $RefParser from '@apidevtools/json-schema-ref-parser';

import type { JSONSchema, JSONSchemaTypeName } from './types/AST';
import { justName, toSafeString } from './utils';

export type ReferenceSchemaMap = WeakMap<JSONSchema, string>;
export type ReferencePathMap = Map<string, JSONSchema>;

export async function dereference(schema: JSONSchema): Promise<{
  referenceSchemaMap: ReferenceSchemaMap;
  referencePathMap: ReferencePathMap;
  dereferencedSchema: JSONSchema;
}> {
  const parser = new $RefParser();
  const referenceSchemaMap: ReferenceSchemaMap = new WeakMap();
  const referencePathMap: ReferencePathMap = new Map();
  const dereferencedSchema = (await parser.dereference(schema, {
    dereference: {
      onDereference(path: string, value: JSONSchema) {
        if ((isObjectType(value) || isArrayType(value)) && noName(value)) {
          value.$id = toSafeString(justName(path));
        }
        referenceSchemaMap.set(value, path);
        referencePathMap.set(path, value);
      },
    },
  })) as JSONSchema;
  return { referenceSchemaMap, referencePathMap, dereferencedSchema };
}

function hasType(schema: JSONSchema, type: JSONSchemaTypeName) {
  return (
    schema.type === type ||
    (Array.isArray(schema.type) && schema.type.includes(type))
  );
}
function isObjectType(schema: JSONSchema) {
  return (
    schema.properties !== undefined ||
    hasType(schema, 'object') ||
    hasType(schema, 'null')
  );
}
function isArrayType(schema: JSONSchema) {
  return (
    schema.items !== undefined ||
    hasType(schema, 'array') ||
    hasType(schema, 'null')
  );
}
function noName(schema: JSONSchema) {
  return !schema.$id && !schema.title;
}
