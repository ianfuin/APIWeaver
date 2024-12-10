import { convertObj } from 'swagger2openapi';
import { readJSONSync } from 'fs-extra';
import path from 'path'

import { DocumentParser } from '../packages/core/DocumentParser';
import { buildTreeNode } from '../packages/core/treeNode';
import { generateDirAndFile } from '../packages/core/generateDirAndFile';

const swagger2Json = readJSONSync(path.resolve(__dirname, './json/qbi.json'));

async function run() {
  const res = await convertObj(swagger2Json as any, { patch: true, warnOnly: true });
  const apiModels = new DocumentParser(res.openapi as any).getApiModels();
  const treeNode = buildTreeNode(apiModels);
  await generateDirAndFile(treeNode, './test');
}

run();
