import { execSync } from 'node:child_process';
const str = execSync(
  'yarn aw gen -c /Users/ianfuin/Desktop/code/APIWeaver/packages/demo/src/aw.config.ts',
);
console.log(str.toString('utf8').trim());
