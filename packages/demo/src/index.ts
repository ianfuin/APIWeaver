import { execSync } from 'node:child_process';
const str = execSync(
  'yarn aw standardModel /Users/wufang/Desktop/code/api/APIWeaver/APIWeaver/packages/demo/src  -n=B',
);
console.log(str.toString('utf8').trim());
