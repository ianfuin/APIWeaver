import * as ts from "typescript";
import { JSONSchema7 } from "json-schema";

// 示例复杂 JSON Schema
const jsonSchema: JSONSchema7 = {
  type: "object",
  properties: {
    // 基础类型
    str: { type: "string" },
    num: { type: "number" },
    int: { type: "integer" },
    bol: { type: "boolean" },
    obj_any: { type: "object" },
    obj_enum: { type: "object", enum: ["placed", "approved", "delivered"] },
    arr_any: { type: "array" },
    arr_enum: { type: "array", enum: ["placed", "approved", "delivered"] },
    status: {
      type: "string",
      description: "Order Status",
      enum: ["placed", "approved", "delivered"],
    },
    object: {
      type: "object",
      properties: {
        email: { type: "string" },
        phone: { type: "string" },
      },
      required: ["email"],
    },
    array: {
      type: "array",
      items: { type: "string" },
      required: ["email"],
    },
    arrays: {
      type: "array",
      items: [{ type: "string" }, { type: "number" }],
      required: ["email"],
    },
    oneOf: {
      oneOf: [
        { type: "string" },
        {
          type: "object",
          properties: {
            theme: { type: "string" },
            notifications: { type: "boolean" },
          },
        },
      ],
    },
  },
  required: ["name", "age"],
};

// 生成 TypeScript 代码
function generateTsFromJsonSchema(
  schema: JSONSchema7,
  typeName: string
): string {
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

  const typeAlias = createTypeAliasFromSchema(typeName, schema);

  const sourceFile = ts.createSourceFile(
    `${typeName}.ts`,
    "",
    ts.ScriptTarget.ES2015,
    /*setParentNodes*/ false,
    ts.ScriptKind.TS
  );

  return printer.printNode(ts.EmitHint.Unspecified, typeAlias, sourceFile);
}

// 创建 TypeScript 类型别名
function createTypeAliasFromSchema(
  typeName: string,
  schema: JSONSchema7
): ts.InterfaceDeclaration {
  if (schema.type !== "object" || !schema.properties) {
    throw new Error("Currently, only object types are supported.");
  }

  const members = Object.entries(schema.properties).map(([key, propSchema]) => {
    const optional = !(schema.required && schema.required.includes(key));
    const typeNode = mapJsonSchemaTypeToTypeScriptType(
      propSchema as JSONSchema7
    );

    return ts.factory.createPropertySignature(
      undefined,
      key,
      optional
        ? ts.factory.createToken(ts.SyntaxKind.QuestionToken)
        : undefined,
      typeNode
    );
  });

  return ts.factory.createInterfaceDeclaration(
    [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
    ts.factory.createIdentifier(typeName),
    undefined,
    undefined,
    members
  );
}

// 将 JSON Schema 类型映射为 TypeScript 类型节点
function mapJsonSchemaTypeToTypeScriptType(schema: JSONSchema7): ts.TypeNode {
  if (schema.$ref) {
    // 处理引用
    const refTypeName = schema.$ref.replace(/^#\/definitions\//, "");
    return ts.factory.createTypeReferenceNode(refTypeName, undefined);
  }

  if (schema.enum) {
    // 处理 enum，将其转换为联合类型
    const unionTypeNode = ts.factory.createUnionTypeNode(
      schema.enum.map((value) =>
        ts.factory.createLiteralTypeNode(
          ts.factory.createStringLiteral(value as string)
        )
      )
    );
    if (schema.type === "array") {
      return ts.factory.createArrayTypeNode(unionTypeNode);
    }
    if (['string'].includes(schema.type)) {
      return ts.factory.createArrayTypeNode(unionTypeNode);
    }
    return unionTypeNode;
  }

  if (schema.oneOf) {
    return ts.factory.createUnionTypeNode(
      schema.oneOf.map(mapJsonSchemaTypeToTypeScriptType)
    );
  }

  if (schema.anyOf) {
    // anyOf 常常被视为联合类型
    return ts.factory.createUnionTypeNode(
      schema.anyOf.map(mapJsonSchemaTypeToTypeScriptType)
    );
  }

  if (schema.allOf) {
    // allOf 被视为交集类型
    return ts.factory.createIntersectionTypeNode(
      schema.allOf.map(mapJsonSchemaTypeToTypeScriptType)
    );
  }

  switch (schema.type) {
    case "string":
      return ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword);
    case "number":
    case "integer":
      return ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword);
    case "boolean":
      return ts.factory.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword);
    case "object":
      if (schema.properties) {
        return createTypeLiteralFromProperties(schema);
      }
      return ts.factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword);
    case "array":
      if (schema.items) {
        return Array.isArray(schema.items)
          ? ts.factory.createUnionTypeNode(
              schema.items.map(mapJsonSchemaTypeToTypeScriptType)
            )
          : ts.factory.createArrayTypeNode(
              mapJsonSchemaTypeToTypeScriptType(schema.items as JSONSchema7)
            );
      }
      return ts.factory.createArrayTypeNode(
        ts.factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword)
      );
    default:
      return ts.factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword);
  }
}

// 创建类型文字节点
function createTypeLiteralFromProperties(
  schema: JSONSchema7
): ts.TypeLiteralNode {
  const members = Object.entries(schema.properties || {}).map(
    ([key, propSchema]) => {
      const optional = !(schema.required && schema.required.includes(key));
      const typeNode = mapJsonSchemaTypeToTypeScriptType(
        propSchema as JSONSchema7
      );

      return ts.factory.createPropertySignature(
        undefined,
        key,
        optional
          ? ts.factory.createToken(ts.SyntaxKind.QuestionToken)
          : undefined,
        typeNode
      );
    }
  );

  return ts.factory.createTypeLiteralNode(members);
}

// 使用示例 JSON Schema 生成 TypeScript 代码
const tsCode = generateTsFromJsonSchema(jsonSchema, "MyType");
console.log(tsCode);
