import { deburr, trim, upperFirst, isPlainObject } from 'lodash';

import {
  AST,
  JSONSchema,
  JSONSchemaType,
  TInterfaceParam,
  T_ANY,
} from './types/AST';

type SchemaType =
  | 'STRING'
  | 'NUMBER'
  | 'BOOLEAN'
  | 'OBJECT'
  | 'ARRAY'
  | 'NULL'
  | 'REFERENCE'
  | 'ENUM'
  | 'UNION'
  | 'UNKNOWN';

// type Api = {
//   [key: string]: {
//     schema: JSONSchema;
//     ast: AST;
//   };
// };

export function parser(
  schema: JSONSchema | JSONSchemaType,
  keyName?: string | undefined,
): AST {
  if (isPrimitive(schema)) {
    return {
      type: 'LITERAL',
      params: schema,
    };
  }

  const matchedTypes: SchemaType[] = [];

  for (const [schemaType, f] of Object.entries(matchers)) {
    if (f(schema)) {
      matchedTypes.push(schemaType as SchemaType);
    }
  }

  if (matchedTypes.length === 0) {
    matchedTypes.push('UNKNOWN');
  }

  if (matchedTypes.length === 1) {
    return createAST(schema, matchedTypes[0], keyName);
  }

  return {
    type: 'UNION',
    description: schema.description,
    standaloneName: standaloneName(schema),
    params: matchedTypes.map((type) => {
      return createAST(schema, type, keyName);
    }),
  };
}

export function createAST(
  schema: JSONSchema,
  schemaType: SchemaType,
  keyName: string | undefined,
): AST {
  const ast = {} as AST;

  switch (schemaType) {
    case 'STRING':
      return {
        type: 'STRING',
        description: schema.description,
        standaloneName: standaloneName(schema, keyName),
      };
    case 'NUMBER':
      return {
        type: 'NUMBER',
        description: schema.description,
        standaloneName: standaloneName(schema, keyName),
      };
    case 'BOOLEAN':
      return {
        type: 'BOOLEAN',
        description: schema.description,
        standaloneName: standaloneName(schema, keyName),
      };
    case 'OBJECT':
      return {
        type: 'OBJECT',
        description: schema.description,
        standaloneName: standaloneName(schema, keyName),
      };
    case 'ARRAY':
      if (typeof schema.items !== 'object') {
        const minItems = schema.minItems;
        const maxItems =
          typeof schema.maxItems === 'number' ? schema.maxItems : -1;

        // 如果 minItems，maxItems 有值，则识别为 TUPLE
        if (minItems > 0 || maxItems >= 0) {
          return {
            type: 'TUPLE',
            description: schema.description,
            standaloneName: standaloneName(schema),
            maxItems: schema.maxItems,
            minItems,
            params: Array(Math.max(maxItems, minItems) || 0).fill(T_ANY),
          };
        }

        return {
          type: 'ARRAY',
          description: schema.description,
          standaloneName: standaloneName(schema),
          params: T_ANY,
        };
      }

      // 如果 schema.items 为数组，则识别为 TUPLE
      if (Array.isArray(schema.items)) {
        const minItems = schema.minItems;
        const maxItems = schema.maxItems;
        return {
          type: 'TUPLE',
          description: schema.description,
          standaloneName: standaloneName(schema, keyName),
          maxItems,
          minItems,
          params: schema.items
            .map((_) => {
              if (typeof _ === 'boolean') {
                return null;
              }
              return parser(_, undefined);
            })
            .filter((_) => _ !== null),
        };
      } else {
        return {
          type: 'ARRAY',
          description: schema.description,
          standaloneName: standaloneName(schema, keyName),
          params: parser(schema.items, undefined),
        };
      }
    case 'NULL':
      return {
        type: 'NULL',
        description: schema.description,
        standaloneName: standaloneName(schema, keyName),
      };
    case 'REFERENCE':
      return {
        type: 'REFERENCE',
        description: schema.description,
        ref: schema.$ref,
      };
    case 'ENUM':
      return {
        type: 'UNION',
        description: schema.description,
        standaloneName: standaloneName(schema, keyName),
        params:
          schema.enum?.map((_) => {
            return parser(_, undefined);
          }) || [],
      };
    case 'UNION':
      if (Array.isArray(schema.type)) {
        return {
          type: 'UNION',
          description: schema.description,
          standaloneName: standaloneName(schema),
          params: schema.type.map((type) => {
            return parser({ type }, undefined);
          }),
        };
      }

      return {
        type: 'UNION',
        description: schema.description,
        standaloneName: standaloneName(schema),
        params:
          (schema.oneOf ?? schema.anyOf)?.map((_) => parser(_, undefined)) ||
          [],
      };
    case 'UNKNOWN':
      return {
        type: 'INTERFACE',
        standaloneName: standaloneName(schema, keyName),
        description: schema.description,
        params: Object.entries(schema.properties)
          .map(([key, value]) => {
            if (typeof value === 'boolean') {
              return null;
            }
            return {
              ast: parser(value, key),
              isRequired: schema.required?.includes(key) ?? false,
              readOnly: schema.readOnly,
            } as TInterfaceParam;
          })
          .filter((_) => _ !== null),
      };
  }

  return ast;
}

export function isUNION(schema: JSONSchema): boolean {
  return (
    Array.isArray(schema.type) ||
    Reflect.has(schema, 'anyOf') ||
    Reflect.has(schema, 'oneOf') ||
    Reflect.has(schema, 'allOf')
  );
}

const matchers: { [key in SchemaType]: (schema: JSONSchema) => boolean } = {
  /**
   * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.3
   */
  STRING(schema) {
    if (Reflect.has(schema, 'enum')) {
      return false;
    }

    if (schema.type === 'string') {
      return true;
    }

    if (!isUNION(schema) && typeof schema.default === 'string') {
      return true;
    }

    return false;
  },
  /**
   * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.2
   */
  NUMBER(schema) {
    if (Reflect.has(schema, 'enum')) {
      return false;
    }

    if (schema.type === 'integer' || schema.type === 'number') {
      return true;
    }

    if (!isUNION(schema) && typeof schema.default === 'number') {
      return true;
    }

    return false;
  },
  BOOLEAN(schema) {
    if (Reflect.has(schema, 'enum')) {
      return false;
    }

    if (schema.type === 'boolean') {
      return true;
    }

    if (!isUNION(schema) && typeof schema.default === 'boolean') {
      return true;
    }

    return false;
  },
  /**
   * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.5
   */
  OBJECT(schema) {
    return (
      schema.type === 'object' &&
      !isPlainObject(schema.additionalProperties) &&
      !schema.allOf &&
      !schema.anyOf &&
      !schema.oneOf &&
      !schema.patternProperties &&
      !schema.properties &&
      !schema.required
    );
  },
  /**
   * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.4
   */
  ARRAY(schema) {
    if (schema.type === 'array' || Reflect.has(schema, 'items')) {
      return true;
    }

    return false;
  },
  NULL(schema) {
    return schema.type === 'null';
  },
  REFERENCE(schema) {
    return Reflect.has(schema, '$ref');
  },
  /**
   * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.1
   */
  ENUM(schema) {
    if (
      schema.type &&
      schema.type !== 'boolean' &&
      schema.type !== 'integer' &&
      schema.type !== 'number' &&
      schema.type !== 'string'
    ) {
      return false;
    }

    // const 处理为只有一个值的 enum
    return Reflect.has(schema, 'enum') || Reflect.has(schema, 'const');
  },
  UNION(schema) {
    return isUNION(schema);
  },
  UNKNOWN() {
    return false;
  },
};

function standaloneName(
  schema: JSONSchema,
  defaultName?: string,
): string | undefined {
  const name = schema.title || schema.$id;
  if (name) {
    return toSafeString(name);
  } else {
    return defaultName;
  }
}

function toSafeString(string: string) {
  // identifiers in javaScript/ts:
  // First character: a-zA-Z | _ | $
  // Rest: a-zA-Z | _ | $ | 0-9

  return upperFirst(
    // remove accents, umlauts, ... by their basic latin letters
    deburr(string)
      // replace chars which are not valid for typescript identifiers with whitespace
      .replace(/(^\s*[^a-zA-Z_$])|([^a-zA-Z_$\d])/g, ' ')
      // uppercase leading underscores followed by lowercase
      .replace(/^_[a-z]/g, (match) => match.toUpperCase())
      // remove non-leading underscores followed by lowercase (convert snake_case)
      .replace(/_[a-z]/g, (match) =>
        match.substr(1, match.length).toUpperCase(),
      )
      // uppercase letters after digits, dollars
      .replace(/([\d$]+[a-zA-Z])/g, (match) => match.toUpperCase())
      // uppercase first letter after whitespace
      .replace(/\s+([a-zA-Z])/g, (match) => trim(match.toUpperCase()))
      // remove remaining whitespace
      .replace(/\s/g, ''),
  );
}

export function isPrimitive(
  schema: JSONSchema | JSONSchemaType,
): schema is JSONSchemaType {
  return !isPlainObject(schema);
}
