import path from 'path';

import {
  defalutPlugin,
  defineConfig,
  getReferenceCodeStr,
} from '@apiweaver/core';
import { openapiToStandardModel } from '@apiweaver/openapi';

export default defineConfig({
  outputDir: path.resolve(__dirname, '../service'),
  origins: [
    {
      name: 'A',
      outputDir: path.resolve(__dirname, '../service/A'),
      filePath: [
        path.resolve(__dirname, '../json/swagger2-1.json'),
        path.resolve(__dirname, '../json/swagger2-2.json'),
      ],
    },
    {
      name: 'B',
      outputDir: path.resolve(__dirname, '../service/B'),
      filePath: [path.resolve(__dirname, '../json/base/qbi.json')],
      plugins: [
        openapiToStandardModel({
          filterPath: (path) => {
            if (['/openapi'].some((v) => path.startsWith(v))) {
              return false;
            }
            if (
              ['.htm', '.json', '**', '.txt', '.js'].some((v) =>
                path.endsWith(v),
              )
            ) {
              return false;
            }
            return true;
          },
        }),
      ],
    },
  ],
  generateDirAndFileOptions: {
    prettierOptions: {
      tabWidth: 2,
      semi: true,
      trailingComma: 'all',
      singleQuote: true,
      printWidth: 80,
    },
  },
  buildTreeNodeDirectoryOptions: {
    usingOperationId: true,
    extension: 'ts',
    getContent: (api, compiledStandardModel) => {
      const query = api.parameters?.query;
      const header = api.parameters?.header;
      const path = api.parameters?.path;
      const bodyJson = api.requestBody?.['application/json'];
      const bodyFormData = api.requestBody?.['multipart/form-data'];
      const response = api.responses?.[200]?.['application/json'];

      const refCodeStr = getReferenceCodeStr(compiledStandardModel, [
        query,
        header,
        path,
        bodyJson,
        bodyFormData,
        response,
      ]).join('\n');

      return `
        ${refCodeStr}
        ${query?.getCodeStr() ?? ''}
        ${header?.getCodeStr() ?? ''}
        ${path?.getCodeStr() ?? ''}
        ${bodyJson?.getCodeStr() ?? ''}
        ${bodyFormData?.getCodeStr() ?? ''}
        ${response?.getCodeStr() ?? ''}

        const path = '${api.path}'
        const method = '${api.method}'
        `;
    },
  },
  plugins: [defalutPlugin()],
});
