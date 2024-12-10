import type { SchemaObject, ReferenceObject, NonArraySchemaObject } from './types';
import { isReferenceObject } from './util';

enum Declaration {
  'interface',
  'type',
  'class',
}

const JAVA_TYPE = {
  Set: 'Set<any>',
  List: 'Array<any>',
};

function createUnionType(types: string[]) {
  return types.join('|');
}

function createIntersectionType(types: string[]) {
  return types.join('&');
}

function createArrayType(type: string) {
  return ['Array<', type, '>'].join('');
}

function createStringLiteral(val: string) {
  return ["'", val, "'"].join('');
}

function createDescription(desc: SchemaObject['description']) {
  if (!desc) return '';
  return ['\n/** ', desc, ' */\n'].join('');
}

function createDeclaration(declaratio?: Declaration) {
  switch (declaratio) {
    case Declaration.interface:
      return 'interface';
    case Declaration.type:
      return 'type';
    case Declaration.class:
      return 'class';

    default:
      return 'interface';
  }
}

export class SchemaGenerate {
  readonly $refs: string[] = [];

  readonly schema: SchemaObject;

  constructor(schema: SchemaObject) {
    this.schema = schema;
  }

  private createAdditionalProperties(additionalProperties: SchemaObject['additionalProperties']) {
    if (!additionalProperties) return '';

    if (additionalProperties === true) {
      return '\n[key: string]: any';
    }

    return ['\n[key: string]', ':', this.mapSchemaObjectToTypeScriptType(additionalProperties)].join(' ');
  }

  private createTypeLiteralFromProperties(schema: NonArraySchemaObject) {
    const members = Object.entries(schema.properties || {}).map(([key, propSchema]) => {
      const optional = !(schema.required && schema.required.includes(key));
      const type = this.mapSchemaObjectToTypeScriptType(propSchema);

      return [createDescription(propSchema.description), key, optional ? '?' : '', ':', type, ';'].join(' ');
    });

    return ['{', members.join('\n'), '}'].join(' ');
  }

  // 将 JSON Schema 类型映射为 TypeScript 类型节点
  private mapSchemaObjectToTypeScriptType(schema: SchemaObject | ReferenceObject) {
    if (isReferenceObject(schema)) {
      // 处理引用
      const refTypeName = schema.$ref
        .replace(/^#\/components\/schemas\//, '')
        .replace('«', '<')
        .replace('»', '>');

      if (JAVA_TYPE[refTypeName]) {
        return JAVA_TYPE[refTypeName];
      }

      this.$refs.push(...new Set(refTypeName.split('<').map((n) => n.replace('>', ''))));
      return refTypeName;
    }

    if (schema.enum) {
      // 处理 enum，将其转换为联合类型
      const unionTypeNode = createUnionType(schema.enum.map(createStringLiteral));
      if (schema.type === 'array') {
        return createArrayType(unionTypeNode);
      }
      if (schema.type === 'string') {
        return unionTypeNode;
      }
    }

    if (schema.type === 'array') {
      if (schema.items) {
        return Array.isArray(schema.items)
          ? createUnionType(schema.items.map(this.mapSchemaObjectToTypeScriptType))
          : createArrayType(this.mapSchemaObjectToTypeScriptType(schema.items));
      }
      return createArrayType('any');
    }

    if (schema.oneOf) {
      return createUnionType(schema.oneOf.map(this.mapSchemaObjectToTypeScriptType));
    }

    if (schema.anyOf) {
      // anyOf 常常被视为联合类型
      return createUnionType(schema.anyOf.map(this.mapSchemaObjectToTypeScriptType));
    }

    if (schema.allOf) {
      // allOf 被视为交集类型
      return createIntersectionType(schema.allOf.map(this.mapSchemaObjectToTypeScriptType));
    }

    switch (schema.type) {
      case 'string':
        if (schema?.format === 'binary') {
          return 'File';
        }
        return 'string';
      case 'number':
      case 'integer':
        return 'number';
      case 'boolean':
        return 'boolean';
      case 'object':
        if (schema.properties) {
          return this.createTypeLiteralFromProperties(schema);
        }
        if (schema.additionalProperties) {
          return ['{', this.createAdditionalProperties(schema.additionalProperties), '}'].join('');
        }
        return 'any';
      default:
        return 'any';
    }
  }

  private createProperty(schema: SchemaObject) {
    return Object.entries(schema.properties || {}).map(([key, propSchema]) => {
      const optional = !(schema.required && schema.required.includes(key));
      const type = this.mapSchemaObjectToTypeScriptType(propSchema);
      return [createDescription(propSchema.description), key, optional ? '?' : '', ':', type, ';'].join('');
    });
  }

  // 生成 TypeScript 代码
  private generateTsFromJsonSchema(schema: SchemaObject, typeName?: string, declaration?: Declaration) {
    const properties = [
      this.createProperty(schema).join('\n'),
      this.createAdditionalProperties(schema.additionalProperties),
    ].join(' ');

    return typeName
      ? [
          createDescription(schema.description),
          'export',
          createDeclaration(declaration),
          typeName.replace(/«[^»]+»/g, ''),
          '{\n',
          properties,
          '\n}',
        ].join(' ')
      : properties;
  }

  generate(name?: string, declaration?: Declaration) {
    return {
      code: this.generateTsFromJsonSchema(this.schema, name, declaration),
      refs: [...new Set(this.$refs)],
    };
  }
}
