import path from 'node:path';
import { ensureDir, writeFile, unlink, remove, readdir } from 'fs-extra';
import type { Options } from 'prettier';
import { format } from 'prettier';

import type { TreeNode, TreeNodeItem } from './treeNode';

const defalutPrettierOption: Options = {
  tabWidth: 2,
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 80,
  parser: 'typescript',
};

export async function generateTreeNodeItem(
  outputDir: string,
  treeNodeItem: TreeNodeItem,
  prettierOption = defalutPrettierOption,
) {
  const { folder, name, action, getCode } = treeNodeItem;

  const folderPath = path.join(outputDir, folder);
  const filePath = path.join(folderPath, name);

  await ensureDir(folderPath);

  if (action === 'remove') {
    await unlink(filePath);
    const files = await readdir(folderPath);
    if (files.length === 0) {
      await remove(folderPath);
    }
  }

  if (action === 'add' || action === 'modified') {
    let content = getCode();
    try {
      content = await format(content, prettierOption);
    } catch (error) {
      console.error(`[format fail] ${filePath} \n`, error);
    }
    await writeFile(filePath, content);
  }
}

// 异步创建文件夹和文件的函数
export async function generateDirAndFile(
  treeNode: TreeNode,
  outputDir: string,
  removeAll: boolean,

  prettierOption?: Options,
) {
  if (removeAll) {
    await remove(outputDir);
  }
  return Promise.all(
    Object.values(treeNode)
      .reduce((prev, curr) => [...prev, ...curr], [])
      .map((child) => generateTreeNodeItem(outputDir, child, prettierOption || defalutPrettierOption)),
  );
}
