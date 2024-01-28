import { flow } from 'lodash/fp';

import { updateCurrentConfig, type OptimizationOriginConfig } from '../config';
import type {
  CompiledStandardModel,
  StandardModel,
} from '../types/standardModel';
import { getPluginHookName, type PluginHooks } from '../plugin';

import { TreeNode, TreeNodeDirectory } from '../types/treeNode';
import { createLogger } from '../logger';
import { timeFrom } from '../utils';

const logger = createLogger('info', { prefix: 'origin-manager' });

export function safeExeFunction<T>(fn: () => T): T | undefined {
  const res = fn();
  return res;
}

interface GenerateCache {
  standardModel?: StandardModel;

  compiledStandardModel?: CompiledStandardModel;

  treeNodeDirectory?: TreeNodeDirectory;
}

export class OriginManager {
  private generateCache: GenerateCache = {};

  constructor(private optimizationOriginConfig: OptimizationOriginConfig) {}

  private log(text: string) {
    logger.info(`${this.optimizationOriginConfig.name} ${text}`, {
      timestamp: true,
    });
  }

  private getPluginHook<H extends keyof PluginHooks>(hookName: H) {
    const { plugins } = this.optimizationOriginConfig;
    updateCurrentConfig(this.optimizationOriginConfig);
    const fnc = getPluginHookName(plugins, hookName);

    if (!fnc) {
      throw new Error(`PluginHooks ${hookName} is not definition!`);
    }

    const pluginStartTime = performance.now();

    return (...args: Parameters<PluginHooks[H]>) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const res = fnc(args[0] as any, args[1] as any);
      if (res.then) {
        res.then((v) => {
          this.log(`PluginHooks ${hookName} ${timeFrom(pluginStartTime)}`);
          return v;
        });
      } else {
        this.log(`PluginHooks ${hookName} ${timeFrom(pluginStartTime)}`);
      }
      return res as ReturnType<PluginHooks[H]>;
    };
  }

  private async loadFile(): Promise<string[]> {
    const { urls, filePaths } = this.optimizationOriginConfig;
    const loadFileByUrl = this.getPluginHook('loadFileByUrl');
    const loadFileByPath = this.getPluginHook('loadFileByPath');

    return Promise.all([
      ...urls.map((url) => loadFileByUrl(url)),
      ...filePaths.map((path) => loadFileByPath(path)),
    ]);
  }

  private fileToStandardModel(files: string[]): StandardModel[] {
    const fileToStandardModel = this.getPluginHook('fileToStandardModel');
    return files.map((file) => fileToStandardModel(file));
  }

  private mergeStandardModel(standardModels: StandardModel[]): StandardModel {
    const mergeStandardModel = this.getPluginHook('mergeStandardModel');

    return mergeStandardModel(standardModels);
  }

  diffStandardModel(
    oldStandardModel: StandardModel,
    newStandardModel: StandardModel,
  ): StandardModel {
    const diffStandardModel = this.getPluginHook('diffStandardModel');

    return diffStandardModel(oldStandardModel, newStandardModel);
  }

  private transformStandardModel(standardModel: StandardModel): StandardModel {
    const pluginStartTime = performance.now();

    const { plugins } = this.optimizationOriginConfig;

    const transformStandardModels = plugins
      .filter((p) => p.transformStandardModel)
      .map(
        (p) => p.transformStandardModel,
      ) as PluginHooks['transformStandardModel'][];

    const res = flow(transformStandardModels)(standardModel);

    this.log(`PluginHooks transformStandardModel ${timeFrom(pluginStartTime)}`);

    return res;
  }

  private compileStandardModel(
    standardModel: StandardModel,
  ): CompiledStandardModel {
    if (!this.generateCache.compiledStandardModel) {
      const compileStandardModel = this.getPluginHook('compileStandardModel');

      this.generateCache.compiledStandardModel =
        compileStandardModel(standardModel);
    }

    return this.generateCache.compiledStandardModel;
  }

  private buildTreeNodeDirectory(
    compiledStandardModel: CompiledStandardModel,
  ): TreeNodeDirectory {
    const buildTreeNodeDirectory = this.getPluginHook('buildTreeNodeDirectory');

    return buildTreeNodeDirectory(compiledStandardModel);
  }

  private transformTreeNodeDirectory(
    treeNodeDirectory: TreeNodeDirectory,
  ): TreeNodeDirectory {
    const pluginStartTime = performance.now();
    const { plugins } = this.optimizationOriginConfig;

    const transformStandardModels = plugins
      .filter((p) => p.transformTreeNodeDirectory)
      .map(
        (p) => p.transformTreeNodeDirectory,
      ) as PluginHooks['transformTreeNodeDirectory'][];

    const res = flow(transformStandardModels)(treeNodeDirectory);

    this.log(
      `PluginHooks transformTreeNodeDirectory ${timeFrom(pluginStartTime)}`,
    );

    return res;
  }

  private generateDirAndFile(tree: TreeNode, outputDir: string): Promise<void> {
    const generateDirAndFile = this.getPluginHook('generateDirAndFile');

    return generateDirAndFile(tree, outputDir);
  }

  updateOriginConfig(optimizationOriginConfig: OptimizationOriginConfig) {
    this.optimizationOriginConfig = optimizationOriginConfig;
    this.clearGenerateCache();
  }

  async getStandardModel() {
    if (!this.generateCache.standardModel) {
      const files = await this.loadFile();
      //
      const standardModels = this.fileToStandardModel(files);
      //
      let standardModel = this.mergeStandardModel(standardModels);
      //
      standardModel = this.transformStandardModel(standardModel);

      this.generateCache.standardModel = standardModel;
    }

    return this.generateCache.standardModel;
  }

  getTreeNodeDirectory(compiledStandardModel: CompiledStandardModel) {
    if (!this.generateCache.treeNodeDirectory) {
      //
      let treeNodeDirectory = this.buildTreeNodeDirectory(
        compiledStandardModel,
      );
      //
      treeNodeDirectory = this.transformTreeNodeDirectory(treeNodeDirectory);
      //
      this.generateCache.treeNodeDirectory = treeNodeDirectory;
    }

    return this.generateCache.treeNodeDirectory;
  }

  getName() {
    return this.optimizationOriginConfig.name;
  }

  clearGenerateCache(key?: keyof GenerateCache) {
    if (key) {
      this.generateCache[key] = undefined;
    } else {
      this.generateCache = {};
    }
  }

  async startGenerate() {
    const generateStartTime = performance.now();

    this.log('Generate:start');
    //
    const standardModel = await this.getStandardModel();
    //
    const compiledStandardModel = this.compileStandardModel(standardModel);
    //
    const treeNodeDirectory = this.getTreeNodeDirectory(compiledStandardModel);
    //
    await this.generateDirAndFile(
      treeNodeDirectory,
      this.optimizationOriginConfig.outputDir,
    );

    this.log(`Generate:end ${timeFrom(generateStartTime)}`);
  }
}
