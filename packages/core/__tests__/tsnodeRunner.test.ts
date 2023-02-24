import path from 'path';

import {
  compileTypeScript,
  runTypeScriptCode,
  runTypeScriptFile,
} from '../src/utils/tsnodeRunner';

describe('runTypeScriptFile', () => {
  it('should execute a TypeScript file without errors', () => {
    expect(() => {
      runTypeScriptFile(
        path.resolve(__dirname, '../src/utils/tsnodeRunner.ts'),
      );
    }).not.toThrow();
  });
});

describe('compileTypeScript', () => {
  it('should transpile TypeScript to JavaScript without errors', () => {
    const code =
      'const message: string = "Hello, world!"; console.log(message);';
    const fileName = 'test.ts';

    expect(() => {
      const jsCode = compileTypeScript(code, fileName);
      // check if the compiled JavaScript code contains the expected output
      expect(jsCode).toContain('console.log(message);');
    }).not.toThrow();
  });
});

describe('runTypeScriptCode', () => {
  it('should execute JavaScript code without errors', () => {
    const code = 'console.log("Hello, world!");';
    const fileName = 'test.js';

    expect(() => {
      runTypeScriptCode(code, fileName);
    }).not.toThrow();
  });
});
