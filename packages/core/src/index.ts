// export { createDirAndFile } from './utils/fileGenerator';

import { parser } from './schema/parser';
import type { JSONSchema } from './schema/types/AST';

// export type { TreeNode } from './utils/fileGenerator';

const schema: JSONSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  properties: {
    colors: {
      type: 'array',
      items: {
        type: 'string',
        enum: ['red', 'green', 'blue'],
      },
      minItems: 1,
      maxItems: 3,
      uniqueItems: true,
    },
  },
  required: ['colors'],
};
const ast = parser(schema);

console.log(ast);
