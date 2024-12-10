/**
 * 文件生成
 */
import { ApiModel } from './apiModel';
import type { CompareResults } from './compareApiModel';

export interface TreeNodeItem {
  name: string;
  folder: string;
  getCode: () => string;

  getApiModel?: () => ApiModel;
  action: 'add' | 'remove' | 'modified';
  children?: TreeNode[];
}

export type TreeNode = { [folder: string]: TreeNodeItem[] };

function toUpperFirstLetter(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
function generateCodeDefault(apiModel: ApiModel) {
  return [
    apiModel.refs.length ? `import { ${apiModel.refs.join(',')} } from '../types/baseClass'\n\n` : '',
    `export interface ${toUpperFirstLetter(apiModel.standaloneName)} {`,
    `url: '${apiModel.url}';`,
    ` method: '${apiModel.method}';`,
    `headers: { 'Content-Type': '${apiModel.contentType}'; };`,
    apiModel.code,
    '}',
  ].join('');
}
function getAction(uid: string, compareResults: CompareResults | null): TreeNodeItem['action'] {
  if (compareResults) {
    if (compareResults.added.has(uid)) {
      return 'add';
    }

    if (compareResults.removed.has(uid)) {
      return 'remove';
    }

    if (compareResults.modified.has(uid)) {
      return 'modified';
    }
  }

  return 'add';
}

export function buildTreeNode(
  apiModels: ApiModel[],
  compareResults: CompareResults | null,
  generateCode = generateCodeDefault,
) {
  const treeNode: TreeNode = {};
  let refs: string[] = [];

  apiModels.forEach((apiModel) => {
    const treeNodeItem: TreeNodeItem = {
      folder: apiModel.tag,
      name: `${apiModel.standaloneName}.ts`,
      action: getAction(apiModel.uid, compareResults),
      getApiModel: () => apiModel,
      getCode: () => generateCode(apiModel),
    };
    if (!treeNode[treeNodeItem.folder]) {
      treeNode[treeNodeItem.folder] = [];
    }

    refs = refs.concat(apiModel.refs);
    treeNode[treeNodeItem.folder].push(treeNodeItem);
  });

  return { treeNode, refs: [...new Set(refs)] };
}
