/**
 * 简单实现 ts-node 运行 ts 文件功能
 */

import ts from 'typescript';
import vm from 'vm';
import path from 'path';
import fs from 'fs';

// 编译 TypeScript 代码，返回编译后的 JavaScript 代码
export function compileTypeScript(code: string, fileName: string): string {
  // 创建编译选项
  const compilerOptions = {
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ESNext,
  };

  // 编译代码
  const result = ts.transpileModule(code, {
    fileName,
    compilerOptions,
  });

  // 返回编译后的 JavaScript 代码
  return result.outputText;
}

// 执行 TypeScript 代码
export function runTypeScriptCode(code: string, fileName: string) {
  // 编译 TypeScript 代码为 JavaScript 代码
  const jsCode = compileTypeScript(code, fileName);

  // 在 Node.js 上下文中执行 JavaScript 代码
  const script = new vm.Script(jsCode, {
    filename: fileName,
    displayErrors: true,
  });

  const context = vm.createContext({
    require,
    module,
    console,
    exports: {},
  });

  script.runInContext(context);

  return context;
}

// 读取 TypeScript 文件并执行其中的代码
export function runTypeScriptFile(filePath: string) {
  // 读取文件内容
  const code = fs.readFileSync(filePath, 'utf-8');

  // 获取文件名
  const fileName = path.basename(filePath);

  // 执行 TypeScript 代码
  runTypeScriptCode(code, fileName);
}
