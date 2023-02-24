import type { SchemaObject } from './types/OpenAPI';

// 解析 $ref 引用中的值
export function resolveRef(schema: SchemaObject, ref: string) {
  // 如果 ref 不是字符串，直接返回 schema
  if (typeof ref !== 'string') {
    return schema;
  }

  // 如果 ref 是一个空字符串，返回根节点的 schema
  if (ref === '') {
    return schema;
  }

  // 如果 ref 以 # 开头，表示在本地 schema 中查找
  if (ref.startsWith('#')) {
    const parts = ref.slice(1).split('/');
    let value = schema;
    for (const part of parts) {
      value = value[part];
    }
    return value;
  }

  // 如果 ref 是一个 URL，可以使用 fetch 或其他工具加载外部 schema
  throw new Error(`Unsupported ref: ${ref}`);
}
