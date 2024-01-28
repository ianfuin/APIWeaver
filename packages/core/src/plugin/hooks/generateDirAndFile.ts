import path from 'node:path';
import { ensureDir, writeFile, remove } from 'fs-extra';
import { format } from 'prettier';

import type { TreeNode } from '../../types/treeNode';
import type { PluginHooks } from '../../plugin';
import { getCurrentConfig } from '../../config';

// 异步创建文件夹和文件的函数
export const generateDirAndFile: PluginHooks['generateDirAndFile'] = async (
  tree: TreeNode,
  outputDir: string,
) => {
  if (!tree) return;

  const { prettierOptions, clear } =
    getCurrentConfig()?.generateDirAndFileOptions ?? {};

  const canClear = clear === true;

  if (canClear) {
    await remove(outputDir);
  }

  async function generate(treeNode: TreeNode, treeNodePath: string) {
    // 创建当前节点的路径
    const nodePath = path.join(treeNodePath, treeNode.name);

    // 如果当前节点是文件夹，则创建文件夹并递归创建子节点
    if (treeNode.type === 'folder' && treeNode.children.length > 0) {
      await ensureDir(nodePath);
      await Promise.all(
        treeNode.children.map((child) => generate(child, nodePath)),
      );
    }

    // 如果当前节点是文件，则创建文件并写入内容
    if (treeNode.type === 'file') {
      const formatted = await format(treeNode.content, {
        ...prettierOptions,
        parser: 'typescript',
      });
      await writeFile(nodePath, formatted);
    }
  }

  return generate(tree, outputDir);
};
