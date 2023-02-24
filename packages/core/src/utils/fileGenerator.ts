/**
 * 文件生成
 */

import fs from 'fs-extra';
import path from 'path';

interface TreeNodeBase {
  type: 'folder' | 'file';
  name: string;
}

interface TreeNodeFile extends TreeNodeBase {
  type: 'file';
  content: string;
}

interface TreeNodeDirectory extends TreeNodeBase {
  type: 'folder';
  children: TreeNode[];
}

export type TreeNode = TreeNodeDirectory | TreeNodeFile;

// 异步创建文件夹和文件的函数
export async function createDirAndFile(tree: TreeNode, basePath: string) {
  // 创建当前节点的路径
  const nodePath = path.join(basePath, tree.name);

  // 如果当前节点是文件夹，则创建文件夹并递归创建子节点
  if (tree.type === 'folder') {
    await fs.ensureDir(nodePath);
    for (const child of tree.children) {
      await createDirAndFile(child, nodePath);
    }
  }

  // 如果当前节点是文件，则创建文件并写入内容
  if (tree.type === 'file') {
    await fs.writeFile(nodePath, tree.content);
  }
}
