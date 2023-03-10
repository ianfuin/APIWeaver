import { cloneDeep } from 'lodash/fp';

import type { JSONSchema } from './types/AST';

import { dereference } from './dereference';
import { parse } from './parse';
import { generate } from './generate';

export async function compile(
  schema: JSONSchema,
  baseName?: string,
): Promise<{
  schemaCodeStr: string;
  referenceCodeStr: string[];
}> {
  const _schema = cloneDeep(schema);

  _schema.title = baseName;

  /** dereference */
  const { referenceSchemaMap, referencePathMap, dereferencedSchema } =
    await dereference(_schema);

  /** parse */
  const schemaParsed = parse(dereferencedSchema, referenceSchemaMap);
  const referenceParsed = [...referencePathMap.values()].map((value) => {
    return parse(value, referenceSchemaMap);
  });

  /** generate */
  const schemaCodeStr: string = generate(schemaParsed);
  const referenceCodeStr: string[] = referenceParsed.map((ast) =>
    generate(ast),
  );

  referencePathMap.clear();

  return { schemaCodeStr, referenceCodeStr };
}
