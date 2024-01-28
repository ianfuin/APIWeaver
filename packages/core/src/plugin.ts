import { last } from 'lodash/fp';
import type {
  StandardModel,
  CompiledStandardModel,
} from './types/standardModel';
import type { TreeNode, TreeNodeDirectory } from './types/treeNode';

export interface PluginHooks {
  loadFileByUrl: (url: string) => Promise<string>;
  loadFileByPath: (path: string) => Promise<string>;
  fileToStandardModel: (file: string) => StandardModel;
  mergeStandardModel: (standardModels: StandardModel[]) => StandardModel;
  transformStandardModel: (standardModel: StandardModel) => StandardModel;
  diffStandardModel: (
    oldStandardModel: StandardModel,
    newStandardModel: StandardModel,
  ) => any; // TODO
  compileStandardModel: (standardModel: StandardModel) => CompiledStandardModel;
  buildTreeNodeDirectory: (
    compiledStandardModel: CompiledStandardModel,
  ) => TreeNodeDirectory;
  transformTreeNodeDirectory: (
    treeNodeDirectory: TreeNodeDirectory,
  ) => TreeNodeDirectory;
  generateDirAndFile: (tree: TreeNode, outputDir?: string) => Promise<void>;
}

export interface Plugin extends Partial<PluginHooks> {
  name?: string;
}

export function getPluginHookName<H extends keyof PluginHooks>(
  plugins: Partial<PluginHooks>[],
  hookName: H,
): PluginHooks[H] | undefined {
  const hook = last(plugins.filter((p) => p?.[hookName]))?.[hookName];
  return hook;
}

export function getPluginByName(
  plugins: Plugin[],
  name: string,
): Plugin | undefined {
  return last(plugins.filter((p) => p?.name === name));
}

export function definePlugin(plugin: Plugin) {
  return plugin;
}
