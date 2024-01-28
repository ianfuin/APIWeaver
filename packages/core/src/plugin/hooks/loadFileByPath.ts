import fs from 'fs-extra';

import type { PluginHooks } from '../../plugin';

export const loadFileByPath: PluginHooks['loadFileByPath'] = (filePath) => {
  return fs.readFile(filePath, { encoding: 'utf-8' });
};
