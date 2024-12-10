import { readJSONSync } from 'fs-extra';
import path from 'path';

import { Manager } from '../packages/core';

// const qbiJson = readJSONSync(path.resolve(__dirname, './json/qbi.json'));
// const openapi3_1Json = readJSONSync(path.resolve(__dirname, './json/openapi3.1.json'));
const openapi3Json = readJSONSync(path.resolve(__dirname, './json/openapi3.json'));

async function run() {
  const manager = new Manager({ outDir: './service' });
  await manager.parser(openapi3Json);
  await manager.generate();
}

run();
