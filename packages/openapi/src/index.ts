import { compile } from 'json-schema-to-typescript';
import { OpenAPIV3_1 } from 'openapi-types';
import fs from 'fs';
import path from 'path';

import { pathParse } from './pathParse';

import openapi3_1 from '../json/openapi3.json';

const openapi31: OpenAPIV3_1.Document = openapi3_1 as any;

const res = pathParse(openapi31.paths);

const schema = {
  ...res[4],
  components: { schemas: openapi31.components.schemas },
};

compile(schema, 'openapi', {
  additionalProperties: false,
  format: false,
}).then((res) => {
  fs.writeFileSync(path.resolve(__dirname, 'test.ts'), res, 'utf-8');
  fs.writeFileSync(
    path.resolve(__dirname, 'test.json'),
    JSON.stringify(schema),
    'utf-8',
  );
});

// console.log(res);
