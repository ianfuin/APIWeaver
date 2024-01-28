import path from 'node:path';
import os from 'node:os';
import { builtinModules } from 'node:module';
import { statSync } from 'fs-extra';
import colors from 'picocolors';
import { upperFirst, deburr, trim } from 'lodash/fp';

import { findNearestPackageData } from './packages';

export function toSafeString(string?: string) {
  // identifiers in javaScript/ts:
  // First character: a-zA-Z | _ | $
  // Rest: a-zA-Z | _ | $ | 0-9
  if (!string) return '';

  return upperFirst(
    // remove accents, umlauts, ... by their basic latin letters
    deburr(string)
      // replace chars which are not valid for typescript identifiers with whitespace
      .replace(/(^\s*[^a-zA-Z_$])|([^a-zA-Z_$\d])/g, ' ')
      // uppercase leading underscores followed by lowercase
      .replace(/^_[a-z]/g, (match) => match.toUpperCase())
      // remove non-leading underscores followed by lowercase (convert snake_case)
      .replace(/_[a-z]/g, (match) =>
        match.substr(1, match.length).toUpperCase(),
      )
      // uppercase letters after digits, dollars
      .replace(/([\d$]+[a-zA-Z])/g, (match) => match.toUpperCase())
      // uppercase first letter after whitespace
      .replace(/\s+([a-zA-Z])/g, (match) => trim(match.toUpperCase()))
      // remove remaining whitespace
      .replace(/\s/g, ''),
  );
}

export function toSafeArray<T>(value?: T | T[]): T[] {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  return [value];
}

/**
 * Avoid appending "js" to top-level unnamed schemas
 */
function stripExtension(filename: string): string {
  return filename.replace(path.extname(filename), '');
}

/** `foo/bar/baz.json` => `baz` */
export function justName(filename = ''): string {
  return toSafeString(stripExtension(path.basename(filename)));
}

export function tryStatSync(file: string) {
  try {
    return statSync(file, { throwIfNoEntry: false });
  } catch {
    // Ignore errors
  }
}

export function lookupFile(
  dir: string,
  fileNames: string[],
): string | undefined {
  while (dir) {
    for (const fileName of fileNames) {
      const fullPath = path.join(dir, fileName);
      if (statSync(fullPath)?.isFile()) return fullPath;
    }
    const parentDir = path.dirname(dir);
    if (parentDir === dir) return;

    dir = parentDir;
  }
}

const nodeBuiltins = builtinModules.filter((id) => !id.includes(':'));
const NODE_BUILTIN_NAMESPACE = 'node:';

export function isNodeBuiltin(id: string): boolean {
  if (id.startsWith(NODE_BUILTIN_NAMESPACE)) return true;
  return nodeBuiltins.includes(id);
}

export function isFilePathESM(filePath: string): boolean {
  if (/\.m[jt]s$/.test(filePath)) {
    return true;
  } else if (/\.c[jt]s$/.test(filePath)) {
    return false;
  } else {
    // check package.json for type: "module"
    try {
      const pkg = findNearestPackageData(path.dirname(filePath));
      return pkg?.data.type === 'module';
    } catch {
      return false;
    }
  }
}

const windowsSlashRE = /\\/g;
export function slash(p: string): string {
  return p.replace(windowsSlashRE, '/');
}

export const isWindows = os.platform() === 'win32';

export function normalizePath(id: string): string {
  return path.posix.normalize(isWindows ? slash(id) : id);
}

export function timeFrom(start: number, subtract = 0): string {
  const time: number | string = performance.now() - start - subtract;
  const timeString = (time.toFixed(2) + `ms`).padEnd(5, ' ');
  if (time < 50) {
    return colors.green(timeString);
  } else if (time < 100) {
    return colors.yellow(timeString);
  } else {
    return colors.red(timeString);
  }
}

export function safeExeFunction<T>(
  fn: () => T,
  errorMessage?: string,
): T | undefined {
  try {
    const res = fn();
    return res;
  } catch (error) {
    console.warn(errorMessage, error);
  }
}

export async function safeExeAsyncFunction<T>(
  fn: () => Promise<T>,
  errorMessage?: string,
): Promise<T | undefined> {
  try {
    return await fn();
  } catch (error) {
    console.warn(errorMessage, error);
  }
}
