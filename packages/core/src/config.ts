import path from 'node:path';
import { pathToFileURL } from 'node:url';
import type { Options as PrettierOptions } from 'prettier';
import { omit, cloneDeep, isObject } from 'lodash/fp';
import { build } from 'esbuild';
import { writeFile, unlink, existsSync, realpath } from 'fs-extra';

import type { Plugin } from './plugin';
import type {
  CompiledStandardModel,
  CompiledStandardModelApi,
} from './types/standardModel';
import {
  isFilePathESM,
  isNodeBuiltin,
  normalizePath,
  timeFrom,
  toSafeArray,
} from './utils';
import { DEFAULT_CONFIG_FILES } from './constants';
import { createLogger } from './logger';

const logger = createLogger('info', { prefix: 'config' });

interface NodeModuleWithCompile extends NodeModule {
  _compile(code: string, filename: string): unknown;
}

interface BuildTreeNodeDirectoryOptions {
  usingOperationId?: boolean;
  extension?: 'ts' | 'js';
  getContent?: (
    api: CompiledStandardModelApi,
    compiledStandardModel: CompiledStandardModel,
  ) => string;
}
interface GenerateDirAndFileOptions {
  clear?: boolean;
  prettierOptions?: PrettierOptions;
}

interface Options {
  buildTreeNodeDirectoryOptions?: BuildTreeNodeDirectoryOptions;
  generateDirAndFileOptions?: GenerateDirAndFileOptions;
}

export interface UserOriginConfig extends Options {
  name: string;
  outputDir?: string;
  url?: string | string[];
  filePath?: string | string[];
  plugins?: Plugin[];
}

export interface UserConfig extends Options {
  outputDir?: string;

  origins?: UserOriginConfig[];

  plugins?: Plugin[];
}

export interface OptimizationOriginConfig extends Options {
  name: string;
  outputDir: string;
  urls: string[];
  filePaths: string[];
  plugins: Plugin[];
}

export interface OptimizationConfig {
  origins: OptimizationOriginConfig[];
}

type UserConfigFn = () => UserConfig | Promise<UserConfig>;
export type UserConfigExport = UserConfig | Promise<UserConfig> | UserConfigFn;

export function defineConfig(config: UserConfigExport): UserConfigExport {
  return config;
}

async function toOptimizationConfig(
  config: UserConfigExport,
): Promise<OptimizationConfig> {
  const userConfig = typeof config === 'object' ? await config : await config();

  if (!isObject(userConfig)) {
    throw new Error(`config must export or return an object.`);
  }

  const origins: OptimizationOriginConfig[] =
    userConfig.origins?.map((origin) => {
      return {
        ...omit(['outputDir', 'origins', 'plugins'], userConfig),
        ...omit(['url', 'filePath', 'plugins'], origin),
        name: origin.name || 'defalut',
        outputDir: origin.outputDir || userConfig.outputDir || '',
        urls: toSafeArray(origin.url),
        filePaths: toSafeArray(origin.filePath),
        plugins: [
          ...toSafeArray(userConfig.plugins),
          ...toSafeArray(origin.plugins),
        ],
      };
    }) || [];

  return { origins };
}

let currentConfig: OptimizationOriginConfig;

export function updateCurrentConfig(config: OptimizationOriginConfig) {
  currentConfig = config;
}

export function getCurrentConfig() {
  return cloneDeep(omit('plugins', currentConfig));
}

async function bundleConfigFile(
  fileName: string,
  isESM: boolean,
): Promise<{ code: string }> {
  const result = await build({
    absWorkingDir: process.cwd(),
    entryPoints: [fileName],
    write: false,
    target: ['node18'],
    platform: 'node',
    bundle: true,
    format: isESM ? 'esm' : 'cjs',
    mainFields: ['main'],
    sourcemap: 'inline',
    metafile: true,
    define: {},
    plugins: [
      {
        name: 'externalize-deps',
        setup(build) {
          build.onResolve({ filter: /^[^.].*/ }, ({ path: id, kind }) => {
            if (
              kind === 'entry-point' ||
              path.isAbsolute(id) ||
              isNodeBuiltin(id)
            ) {
              return;
            }

            return {
              external: true,
            };
          });
        },
      },
    ],
  });
  const { text } = result.outputFiles[0];
  return {
    code: text,
  };
}

async function loadConfigFromBundledFile(
  fileName: string,
  bundledCode: string,
  isESM: boolean,
): Promise<UserConfigExport> {
  if (isESM) {
    const fileBase = `${fileName}.timestamp-${Date.now()}-${Math.random()
      .toString(16)
      .slice(2)}`;
    const fileNameTmp = `${fileBase}.mjs`;
    const fileUrl = `${pathToFileURL(fileBase)}.mjs`;
    await writeFile(fileNameTmp, bundledCode);
    try {
      return (await import(fileUrl)).default;
    } finally {
      unlink(fileNameTmp, () => {
        //
      });
    }
  } else {
    const extension = path.extname(fileName);
    const realFileName = await realpath(fileName);
    const loaderExt = extension in require.extensions ? extension : '.js';
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const defaultLoader = require.extensions[loaderExt]!;
    require.extensions[loaderExt] = (module: NodeModule, filename: string) => {
      if (filename === realFileName) {
        (module as NodeModuleWithCompile)._compile(bundledCode, filename);
      } else {
        defaultLoader(module, filename);
      }
    };
    // clear cache in case of server restart
    delete require.cache[require.resolve(fileName)];
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const raw = require(fileName);
    require.extensions[loaderExt] = defaultLoader;
    return raw.__esModule ? raw.default : raw;
  }
}

export async function loadConfigFromFile(
  configFile?: string,
  configRoot: string = process.cwd(),
): Promise<{
  path: string;
  config: OptimizationConfig;
} | null> {
  const start = performance.now();

  let resolvedPath: string | undefined;

  if (configFile) {
    resolvedPath = path.resolve(configFile);
  } else {
    for (const filename of DEFAULT_CONFIG_FILES) {
      const filePath = path.resolve(configRoot, filename);
      if (!existsSync(filePath)) continue;

      resolvedPath = filePath;
      break;
    }
  }

  if (!resolvedPath) {
    logger.error('no config file found.');
    return null;
  }

  const isESM = isFilePathESM(resolvedPath);

  const bundled = await bundleConfigFile(resolvedPath, isESM);
  const userConfigExport = await loadConfigFromBundledFile(
    resolvedPath,
    bundled.code,
    isESM,
  );

  logger.info(`bundled config file loaded in ${timeFrom(start)}`, {
    timestamp: true,
  });

  return {
    path: normalizePath(resolvedPath),
    config: await toOptimizationConfig(userConfigExport),
  };
}
