import { readFileSync } from 'fs-extra';
import path from 'node:path';

const { version } = JSON.parse(
  readFileSync(path.resolve(__dirname, '../package.json')).toString(),
);

export const VERSION = version as string;

export const DEFAULT_CONFIG_FILES = [
  'aw.config.js',
  'aw.config.mjs',
  'aw.config.ts',
  'aw.config.cjs',
  'aw.config.mts',
  'aw.config.cts',
];
