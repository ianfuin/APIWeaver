/**
 * JSONSchema 参数解析成对应的 TS 类型
 */

import {
  JSONSchema,
  JSONSchemaType,
  JSONSchemaDefinition,
  AST,
  ParamAST,
  T_ANY,
} from './types/AST';
import { isPlainObject, omit } from 'lodash';

export function isPrimitive(
  schema: JSONSchema | JSONSchemaType,
): schema is JSONSchemaType {
  return !isPlainObject(schema);
}

export function schemaParse(schema: JSONSchemaDefinition): AST {
  if (!schema || typeof schema === 'boolean') {
    return T_ANY;
  }

  const standaloneName = schema.title;
  const description = schema.description;

  // TODO $id $schema $comment
  // TODO definitions $defs

  if (schema.$ref) {
    return {
      type: 'REFERENCE',
      // TODO Parse $ref
      refName: schema.$ref,
    };
  }

  /** -- Multiple Type -- */

  if (Array.isArray(schema.type)) {
    return {
      type: 'UNION',
      standaloneName,
      description,
      params: schema.type.map((type) => {
        return schemaParse({
          ...omit(maybeStripDefault(schema), '$id', 'description', 'title'),
          type,
        });
      }),
    };
  }

  /**
   * for Applying Subschemas With Boolean Logic
   * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.7
   * allOf anyOf oneOf not
   */
  if (Array.isArray(schema.allOf)) {
    return {
      type: 'INTERSECTION',
      standaloneName,
      description,
      params: schema.allOf.map((item) => {
        return schemaParse(item);
      }),
    };
  }
  if (Array.isArray(schema.anyOf) || Array.isArray(schema.oneOf)) {
    return {
      type: 'UNION',
      standaloneName,
      description,
      params: [...schema.anyOf, ...schema.oneOf].map((item) => {
        return schemaParse(item);
      }),
    };
  }

  /** -- Single Type -- */

  /**
   * for Any Instance Type
   * https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.1
   * enum const
   */
  if (schema.enum || schema.const) {
    return {
      type: 'UNION',
      standaloneName,
      description,
      params: [...schema.enum, schema.const].map((schemaType) => {
        return {
          type: 'LITERAL',
          params: schemaType,
        };
      }),
    };
  }

  /**
   * for Null
   */
  if (schema.type === 'null') {
    return {
      type: 'NULL',
      standaloneName,
      description,
    };
  }

  /**
   * for Boolean
   */
  if (schema.type === 'boolean' || typeof schema.default === 'boolean') {
    return {
      type: 'BOOLEAN',
      standaloneName,
      description,
    };
  }

  /**
   * for Numeric Instances (number and integer)
   * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.1
   * multipleOf maximum exclusiveMaximum minimum exclusiveMinimum
   */
  if (
    schema.type === 'number' ||
    schema.type === 'integer' ||
    typeof schema.default === 'number'
  ) {
    return {
      type: 'NUMBER',
      standaloneName,
      description,
    };
  }

  /**
   * for Strings
   * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.3
   * maxLength minLength pattern
   */
  if (schema.type === 'string' || typeof schema.default === 'string') {
    return {
      type: 'STRING',
      standaloneName,
      description,
      format: schema.format,
      contentMediaType: schema.contentMediaType,
      contentEncoding: schema.contentEncoding,
    };
  }

  /**
   * for Arrays
   * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.4
   * items additionalItems maxItems minItems
   * uniqueItems contains
   */
  if (schema.type === 'array' || Array.isArray(schema.default)) {
    if (!schema.items || typeof schema.items === 'boolean') {
      const minItems = schema.minItems;
      const maxItems =
        typeof schema.maxItems === 'number' ? schema.maxItems : -1;

      // TUPLE
      if (minItems > 0 || maxItems >= 0) {
        return {
          type: 'TUPLE',
          standaloneName,
          description,
          maxItems: schema.maxItems,
          minItems,
          params: Array(Math.max(maxItems, minItems) || 0)
            .fill(T_ANY)
            .concat(maxItems >= 0 ? [] : T_ANY),
        };
      }

      return {
        type: 'ARRAY',
        standaloneName,
        description,
        params: T_ANY,
      };
    }

    if (Array.isArray(schema.items)) {
      const minItems = schema.minItems;
      const maxItems = schema.maxItems;

      const params = schema.items.map((item) => schemaParse(item));
      const additionalParams =
        schema.additionalItems === true || schema.additionalItems
          ? schemaParse(schema.additionalItems)
          : [];

      return {
        type: 'TUPLE',
        standaloneName,
        description,
        minItems: minItems,
        maxItems: maxItems,
        params: params.concat(additionalParams) as ParamAST[],
      };
    }

    return {
      type: 'ARRAY',
      standaloneName,
      description,
      params: schemaParse(schema.items) as ParamAST,
    };
  }

  /**
   * for Objects
   * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.5
   * required properties patternProperties additionalProperties
   * maxProperties minProperties dependencies propertyNames
   */
  if (schema.type === 'object' || typeof schema.default === 'object') {
    // TODO patternProperties additionalProperties
    if (schema.properties) {
      return {
        type: 'INTERFACE',
        standaloneName,
        description,
        params: Object.entries(schema.properties).map(([key, value]) => {
          return {
            ast: schemaParse(value) as ParamAST,
            keyName: key,
            isRequired: schema.required?.includes(key),
            isReadOnly: typeof value === 'object' && value.readOnly,
            description: typeof value === 'object' && value.description,
          };
        }),
      };
    }

    return {
      type: 'OBJECT',
      standaloneName,
      description,
    };
  }

  return T_ANY;
}

export function maybeStripDefault(schema: JSONSchema): JSONSchema {
  if (!('default' in schema)) {
    return schema;
  }

  switch (schema.type) {
    case 'array':
      if (Array.isArray(schema.default)) {
        return schema;
      }
      break;
    case 'boolean':
      if (typeof schema.default === 'boolean') {
        return schema;
      }
      break;
    case 'integer':
    case 'number':
      if (typeof schema.default === 'number') {
        return schema;
      }
      break;
    case 'string':
      if (typeof schema.default === 'string') {
        return schema;
      }
      break;
    case 'null':
      if (schema.default === null) {
        return schema;
      }
      break;
    case 'object':
      if (isPlainObject(schema.default)) {
        return schema;
      }
      break;
  }
  delete schema.default;
  return schema;
}
