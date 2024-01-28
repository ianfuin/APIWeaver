import { definePlugin } from '../plugin';

import { loadFileByUrl } from './hooks/loadFileByUrl';
import { loadFileByPath } from './hooks/loadFileByPath';
import { mergeStandardModel } from './hooks/mergeStandardModel';
import { diffStandardModel } from './hooks/diffStandardModel';
import { compileStandardModel } from './hooks/compileStandardModel';
import { buildTreeNodeDirectory } from './hooks/buildTreeNodeDirectory';
import { generateDirAndFile } from './hooks/generateDirAndFile';

export const defalutPlugin = () => {
  return definePlugin({
    loadFileByUrl,
    loadFileByPath,
    mergeStandardModel,
    transformStandardModel: (s) => s,
    diffStandardModel,
    compileStandardModel,
    buildTreeNodeDirectory,
    transformTreeNodeDirectory: (s) => s,
    generateDirAndFile,
  });
};
