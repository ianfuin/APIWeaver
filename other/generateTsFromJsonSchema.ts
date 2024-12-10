import * as ts from "typescript";
import type { JSONSchema7 } from "json-schema";

// 示例 JSON Schema
const jsonSchema: JSONSchema7 = {
  type: "object",
  properties: {
    name: { type: "string" },
    age: { type: "number" },
    isActive: { type: "boolean" },
  },
  required: ["name", "age"],
};

// 将 JSON Schema 类型映射为 TypeScript 类型节点
function mapJsonSchemaTypeToTypeScriptType(schema: JSONSchema7): ts.TypeNode {
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
        return mapJsonSchemaTypeToTypeScriptType(schema.properties);
      }
      return ts.factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword); // 或者递归创建类型
    case "array":
      if (schema.items && !Array.isArray(schema.items)) {
        return ts.factory.createArrayTypeNode(
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

  // const typeLiteral = ts.factory.createTypeLiteralNode(members);

  return ts.factory.createInterfaceDeclaration(
    [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
    ts.factory.createIdentifier(typeName),
    undefined,
    undefined,
    members
  );
}

// 生成 TypeScript 代码
function generateTsFromJsonSchema(
  schema: JSONSchema7,
  typeName: string
): string {
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

  const typeAlias = createTypeAliasFromSchema(typeName, schema);

  const sourceFile = ts.createSourceFile(
    "",
    "",
    ts.ScriptTarget.ESNext,
    /*setParentNodes*/ false,
    ts.ScriptKind.TS
  );

  return printer.printNode(ts.EmitHint.Unspecified, typeAlias, sourceFile);
}

// 使用示例 JSON Schema 生成 TypeScript 代码
const tsCode = generateTsFromJsonSchema(jsonSchema, "MyType");
console.log(tsCode);
