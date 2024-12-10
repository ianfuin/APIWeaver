import type { OpenAPIV3_1 } from 'openapi-types';
import * as ts from 'typescript';

// type OpenAPIV3_JSON = OpenAPIV3_1.Document;
type SchemaObject = OpenAPIV3_1.SchemaObject;
type ReferenceObject = OpenAPIV3_1.ReferenceObject;

const schemas: Record<string, OpenAPIV3_1.SchemaObject> = {
  Order: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
        format: 'int64',
      },
      petId: {
        type: 'integer',
        format: 'int64',
      },
      quantity: {
        type: 'integer',
        format: 'int32',
      },
      shipDate: {
        type: 'string',
        format: 'date-time',
      },
      status: {
        type: 'string',
        description: 'Order Status',
        enum: ['placed', 'approved', 'delivered'],
      },
      complete: {
        type: 'boolean',
        default: false,
      },
    },
    xml: {
      name: 'Order',
    },
  },
  Category: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
        format: 'int64',
      },
      name: {
        type: 'string',
      },
    },
    xml: {
      name: 'Category',
    },
  },
  User: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
        format: 'int64',
      },
      username: {
        type: 'string',
      },
      firstName: {
        type: 'string',
      },
      lastName: {
        type: 'string',
      },
      email: {
        type: 'string',
      },
      password: {
        type: 'string',
      },
      phone: {
        type: 'string',
      },
      userStatus: {
        type: 'integer',
        description: 'User Status',
        format: 'int32',
      },
    },
    xml: {
      name: 'User',
    },
  },
  Tag: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
        format: 'int64',
      },
      name: {
        type: 'string',
      },
    },
    xml: {
      name: 'Tag',
    },
  },
  Pet: {
    required: ['name', 'photoUrls'],
    type: 'object',
    properties: {
      id: {
        type: 'integer',
        format: 'int64',
      },
      category: {
        $ref: '#/components/schemas/Category',
      },
      name: {
        type: 'string',
        example: 'doggie',
      },
      photoUrls: {
        type: 'array',
        xml: {
          name: 'photoUrl',
          wrapped: true,
        },
        items: {
          type: 'string',
        },
      },
      tags: {
        type: 'array',
        xml: {
          name: 'tag',
          wrapped: true,
        },
        items: {
          $ref: '#/components/schemas/Tag',
        },
      },
      status: {
        type: 'string',
        description: 'pet status in the store',
        enum: ['available', 'pending', 'sold'],
      },
    },
    xml: {
      name: 'Pet',
    },
  },
  ApiResponse: {
    type: 'object',
    properties: {
      code: {
        type: 'integer',
        format: 'int32',
      },
      type: {
        type: 'string',
      },
      message: {
        type: 'string',
      },
    },
  },
};

function isReferenceObject(object: SchemaObject | ReferenceObject): object is ReferenceObject {
  return typeof (<ReferenceObject>object)?.$ref !== 'undefined';
}

function createPropertySignature(schema: SchemaObject) {
  return Object.entries(schema.properties || {}).map(([key, propSchema]) => {
    const optional = !(schema.required && schema.required.includes(key));
    const typeNode = mapSchemaObjectToTypeScriptType(propSchema);

    return ts.factory.createPropertySignature(
      undefined,
      key,
      optional ? ts.factory.createToken(ts.SyntaxKind.QuestionToken) : undefined,
      typeNode,
    );
  });
}

// 创建类型文字节点
function createTypeLiteralFromProperties(schema: SchemaObject): ts.TypeLiteralNode {
  const members = createPropertySignature(schema);
  return ts.factory.createTypeLiteralNode(members);
}

// 创建 TypeScript 类型别名
function createTypeAliasFromSchema(typeName: string, schema: SchemaObject): ts.InterfaceDeclaration {
  if (schema.type !== 'object' || !schema.properties) {
    throw new Error('Currently, only object types are supported.');
  }

  
  return ts.factory.createInterfaceDeclaration(
    [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
    ts.factory.createIdentifier(typeName),
    undefined,
    undefined,
    createPropertySignature(schema),
  );
}

// 将 JSON Schema 类型映射为 TypeScript 类型节点 | ReferenceObject
function mapSchemaObjectToTypeScriptType(schema: SchemaObject | ReferenceObject): ts.TypeNode {
  if (isReferenceObject(schema)) {
    // 处理引用
    const refTypeName = schema.$ref.replace(/^#\/components\/schemas\//, '');
    return ts.factory.createTypeReferenceNode(refTypeName, undefined);
  }

  if (schema.enum) {
    // 处理 enum，将其转换为联合类型
    const unionTypeNode = ts.factory.createUnionTypeNode(
      schema.enum.map((value) => ts.factory.createLiteralTypeNode(ts.factory.createStringLiteral(value as string))),
    );
    if (schema.type === 'array') {
      return ts.factory.createArrayTypeNode(unionTypeNode);
    }
    if (schema.type === 'string') {
      return unionTypeNode;
    }
  }

  if (schema.type === 'array') {
    if (schema.items) {
      return Array.isArray(schema.items)
        ? ts.factory.createUnionTypeNode(schema.items.map(mapSchemaObjectToTypeScriptType))
        : ts.factory.createArrayTypeNode(mapSchemaObjectToTypeScriptType(schema.items));
    }
    return ts.factory.createArrayTypeNode(ts.factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword));
  }

  if (schema.oneOf) {
    return ts.factory.createUnionTypeNode(schema.oneOf.map(mapSchemaObjectToTypeScriptType));
  }

  if (schema.anyOf) {
    // anyOf 常常被视为联合类型
    return ts.factory.createUnionTypeNode(schema.anyOf.map(mapSchemaObjectToTypeScriptType));
  }

  if (schema.allOf) {
    // allOf 被视为交集类型
    return ts.factory.createIntersectionTypeNode(schema.allOf.map(mapSchemaObjectToTypeScriptType));
  }

  switch (schema.type) {
    case 'string':
      return ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword);
    case 'number':
    case 'integer':
      return ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword);
    case 'boolean':
      return ts.factory.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword);
    case 'object':
      if (schema.properties) {
        return createTypeLiteralFromProperties(schema);
      }
      return ts.factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword);
    default:
      return ts.factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword);
  }
}

// 生成 TypeScript 代码
function generateTsFromJsonSchema(typeName: string, schema: SchemaObject): string {
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

  const typeAlias = createTypeAliasFromSchema(typeName, schema);

  const sourceFile = ts.createSourceFile(
    `${typeName}.ts`,
    '',
    ts.ScriptTarget.ES2015,
    /*setParentNodes*/ false,
    ts.ScriptKind.TS,
  );

  return printer.printNode(ts.EmitHint.Unspecified, typeAlias, sourceFile);
}

Object.entries(schemas).forEach(([key, schema]) => {
  console.log(generateTsFromJsonSchema(key, schema));
});
