/**
 * JSONSchema 参数解析成对应的 TS 类型
 */
import { isPlainObject, omit } from 'lodash/fp';

import type { ReferenceSchemaMap } from './dereference';

import {
  JSONSchema,
  JSONSchemaType,
  JSONSchemaDefinition,
  AST,
} from './types/AST';
import { toSafeString } from './utils';

export function isPrimitive(
  schema: JSONSchema | JSONSchemaType,
): schema is JSONSchemaType {
  return !isPlainObject(schema);
}

export function parse(
  schema: JSONSchema,
  referenceSchemaMap: ReferenceSchemaMap = new WeakMap(),
): AST {
  const standaloneName = toSafeString(schema.title || schema.$id);
  return schemaParse(schema, referenceSchemaMap, standaloneName);
}

export function schemaParse(
  schema: JSONSchemaDefinition,
  referenceSchemaMap: ReferenceSchemaMap,
  standaloneName?: string,
): AST {
  if (!schema || typeof schema === 'boolean') {
    return {
      type: 'ANY',
      standaloneName,
    };
  }

  const description = schema.description;
  const refPath = referenceSchemaMap.get(schema);

  if (!standaloneName && refPath) {
    return {
      type: 'REFERENCE',
      description,
      standaloneName: toSafeString(schema.title || schema.$id),
    };
  }

  /** -- Multiple Type -- */

  if (Array.isArray(schema.type)) {
    return {
      type: 'UNION',
      standaloneName,
      description,
      params: schema.type.map((type) => {
        return schemaParse(
          {
            ...omit(['$id', 'description', 'title'], maybeStripDefault(schema)),
            type,
          },
          referenceSchemaMap,
        );
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
        return schemaParse(item, referenceSchemaMap);
      }),
    };
  }
  if (Array.isArray(schema.anyOf) || Array.isArray(schema.oneOf)) {
    return {
      type: 'UNION',
      standaloneName,
      description,
      params: [...(schema.anyOf ?? []), ...(schema.oneOf ?? [])].map((item) => {
        return schemaParse(item, referenceSchemaMap);
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
      params: [...(schema.enum ?? []), schema.const]
        .filter((_) => !!_)
        .map((schemaType) => {
          return {
            type: 'LITERAL',
            params: schemaType || 'any',
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
      const minItems = schema.minItems || -1;
      const maxItems =
        typeof schema.maxItems === 'number' ? schema.maxItems : -1;

      // TUPLE
      if (minItems > 0 || maxItems >= 0) {
        return {
          type: 'TUPLE',
          standaloneName,
          description,
          minItems,
          maxItems,
          params: Array(Math.max(maxItems, minItems) || 0)
            .fill({ type: 'ANY' })
            .concat(maxItems >= 0 ? [] : { type: 'ANY' }),
        };
      }

      return {
        type: 'ARRAY',
        standaloneName,
        description,
        params: { type: 'ANY' },
      };
    }

    if (Array.isArray(schema.items)) {
      const minItems = schema.minItems || -1;
      const maxItems = schema.maxItems || -1;

      const params = schema.items.map((item) =>
        schemaParse(item, referenceSchemaMap),
      );
      const additionalParams =
        schema.additionalItems === true || schema.additionalItems
          ? schemaParse(schema.additionalItems, referenceSchemaMap)
          : [];

      return {
        type: 'TUPLE',
        standaloneName,
        description,
        minItems: minItems,
        maxItems: maxItems,
        params: params.concat(additionalParams),
      };
    }

    return {
      type: 'ARRAY',
      standaloneName,
      description,
      params: schemaParse(schema.items, referenceSchemaMap),
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
            ast: schemaParse(value, referenceSchemaMap),
            keyName: key,
            isRequired: schema.required?.includes(key),
            isReadOnly: typeof value === 'object' && value.readOnly,
            description:
              typeof value === 'object' ? value.description : undefined,
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

  return {
    type: 'ANY',
    description,
    standaloneName,
  };
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
