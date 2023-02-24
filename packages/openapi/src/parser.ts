import type { ComponentsObject, SchemaObject } from './types/OpenAPI';
import type { AST } from './types/AST';
import { isPlainObject } from 'lodash/fp';

type Xxx = { [key: string]: { ast: AST; deps: string[] } };


export function parser(components: ComponentsObject) {
  const schemas = components.schemas;

  const refNoFound: string[] = [];

  // #/components/schemas/Car => Car
  //   const refPathMap = new Map<string, string>();

  //   Object.keys(schemas).forEach((key) => {
  //     refPathMap.set(`${refPath}${key}`, key);
  //   });

  Object.entries(schemas).forEach(([key, schema]) => {
    schema.type;
  });
}

export function isCompound(schema: SchemaObject): boolean {
  return Array.isArray(schema.type) || 'anyOf' in schema || 'oneOf' in schema;
}

export type SchemaType =
  | 'ALL_OF'
  | 'UNNAMED_SCHEMA'
  | 'ANY'
  | 'ANY_OF'
  | 'BOOLEAN'
  | 'NAMED_ENUM'
  | 'NAMED_SCHEMA'
  | 'NULL'
  | 'NUMBER'
  | 'STRING'
  | 'OBJECT'
  | 'ONE_OF'
  | 'TYPED_ARRAY'
  | 'REFERENCE'
  | 'UNION'
  | 'UNNAMED_ENUM'
  | 'UNTYPED_ARRAY';

const matchers: Record<SchemaType, (schema: SchemaObject) => boolean> = {
  ALL_OF(schema) {
    return 'allOf' in schema;
  },
  ANY(schema) {
    if (Object.keys(schema).length === 0) {
      return true;
    }
  },
  ANY_OF(schema) {
    return 'anyOf' in schema;
  },
  BOOLEAN(schema) {
    if ('enum' in schema) {
      return false;
    }
    if (schema.type === 'boolean') {
      return true;
    }
    if (!isCompound(schema) && typeof schema.default === 'boolean') {
      return true;
    }
    return false;
  },
  NAMED_ENUM(schema) {
    return 'enum' in schema && 'tsEnumNames' in schema;
  },
  NAMED_SCHEMA(schema) {
    return (
      '$id' in schema &&
      ('patternProperties' in schema || 'properties' in schema)
    );
  },
  NULL(schema) {
    return schema.type === 'null';
  },
  NUMBER(schema) {
    if ('enum' in schema) {
      return false;
    }
    if (schema.type === 'integer' || schema.type === 'number') {
      return true;
    }
    if (!isCompound(schema) && typeof schema.default === 'number') {
      return true;
    }
    return false;
  },
  OBJECT(schema) {
    return (
      schema.type === 'object' &&
      !isPlainObject(schema.additionalProperties) &&
      !schema.allOf &&
      !schema.anyOf &&
      !schema.oneOf &&
      !schema.properties &&
      !schema.required
    );
  },
  ONE_OF(schema) {
    return 'oneOf' in schema;
  },
  REFERENCE(schema) {
    return '$ref' in schema;
  },
  STRING(schema) {
    if ('enum' in schema) {
      return false;
    }
    if (schema.type === 'string') {
      return true;
    }
    if (!isCompound(schema) && typeof schema.default === 'string') {
      return true;
    }
    return false;
  },
  TYPED_ARRAY(schema) {
    if (schema.type && schema.type !== 'array') {
      return false;
    }
    return 'items' in schema;
  },
  UNION(schema) {
    return Array.isArray(schema.type);
  },
  UNNAMED_ENUM(schema) {
    if ('tsEnumNames' in schema) {
      return false;
    }
    if (
      schema.type &&
      schema.type !== 'boolean' &&
      schema.type !== 'integer' &&
      schema.type !== 'number' &&
      schema.type !== 'string'
    ) {
      return false;
    }
    return 'enum' in schema;
  },
  UNNAMED_SCHEMA() {
    return false; // Explicitly handled as the default case
  },
  UNTYPED_ARRAY(schema) {
    return schema.type === 'array' && !('items' in schema);
  },
};
