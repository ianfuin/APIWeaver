import path from 'node:path';
import fs from 'node:fs';

export interface PackageData {
  dir: string;
  data: {
    [field: string]: unknown;
    name: string;
    type: string;
    version: string;
    main: string;
    module: string;
    browser: string | Record<string, string | false>;
    exports: string | Record<string, unknown> | string[];
    imports: Record<string, unknown>;
    dependencies: Record<string, string>;
  };
}

export function tryStatSync(file: string): fs.Stats | undefined {
  try {
    // The "throwIfNoEntry" is a performance optimization for cases where the file does not exist
    return fs.statSync(file, { throwIfNoEntry: false });
  } catch {
    // Ignore errors
  }
}

function loadPackageData(pkgPath: string): PackageData {
  const data = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
  const pkgDir = path.dirname(pkgPath);

  const pkg: PackageData = {
    dir: pkgDir,
    data,
  };

  return pkg;
}

export function findNearestPackageData(basedir: string): PackageData | null {
  while (basedir) {
    const pkgPath = path.join(basedir, 'package.json');
    if (tryStatSync(pkgPath)?.isFile()) {
      try {
        const pkgData = loadPackageData(pkgPath);

        return pkgData;
      } catch {
        //
      }
    }

    const nextBasedir = path.dirname(basedir);
    if (nextBasedir === basedir) break;
    basedir = nextBasedir;
  }

  return null;
}
