/**
 * 文件生成
 */

export interface TreeNodeBase {
  type: 'folder' | 'file';
  name: string;
}

export interface TreeNodeFile extends TreeNodeBase {
  type: 'file';
  content: string;
}

export interface TreeNodeDirectory extends TreeNodeBase {
  type: 'folder';
  children: TreeNode[];
}

export type TreeNode = TreeNodeDirectory | TreeNodeFile;
