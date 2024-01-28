import { groupBy } from 'lodash/fp';

import type { TreeNode, TreeNodeDirectory } from '../../types/treeNode';
import type {
  CompiledStandardModel,
  CompiledStandardModelApi,
  HttpMethods,
} from '../../types/standardModel';
import { getCurrentConfig } from '../../config';

function toUpperFirstLetter(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function getMaxSamePath(paths: string[], samePath = ''): string {
  if (!paths.length) {
    return samePath;
  }

  if (paths.some((path) => !path.includes('/'))) {
    return samePath;
  }

  const segs = paths.map((path) => {
    const [firstSeg, ...restSegs] = path.split('/');
    return { firstSeg, restSegs };
  });

  if (
    segs.every(
      (seg, index) => index === 0 || seg.firstSeg === segs[index - 1].firstSeg,
    )
  ) {
    return getMaxSamePath(
      segs.map((seg) => seg.restSegs.join('/')),
      samePath + '/' + segs[0].firstSeg,
    );
  }

  return samePath;
}

function getNameFromPath(url: string, requestType: HttpMethods, samePath = '') {
  const currUrl = url.slice(samePath.length).match(/([^.]+)/)?.[0] ?? '';

  return (
    requestType +
    currUrl
      .split('/')
      .map((str) => {
        if (str.includes('-')) {
          str = str.replace(/(-\w)+/g, (_match, p1) => {
            if (p1) {
              return p1.slice(1).toUpperCase();
            }
          });
        }

        if (str.match(/^{.+}$/gim)) {
          return 'By' + toUpperFirstLetter(str.slice(1, str.length - 1));
        }
        return toUpperFirstLetter(str);
      })
      .join('')
  );
}

/** some reversed keyword in js but not in java */
const TS_KEYWORDS = ['delete', 'export', 'import', 'new', 'function'];
const REPLACE_WORDS = [
  'remove',
  'exporting',
  'importing',
  'create',
  'functionLoad',
];

function getNameFromOperatorId(operationId: string) {
  const name = operationId.replace(/(.+)(Using.+)/, '$1');

  const index = TS_KEYWORDS.indexOf(name);

  if (index === -1) {
    return name;
  }

  return REPLACE_WORDS[index];
}

export interface TreeNodeDirectoryOptions {
  usingOperationId?: boolean;
  extension?: 'ts' | 'js';
  getContent?: (
    api: CompiledStandardModelApi,
    compiledStandardModel: CompiledStandardModel,
  ) => string;
}

export const buildTreeNodeDirectory = (
  compiledStandardModel: CompiledStandardModel,
) => {
  const options = getCurrentConfig()?.buildTreeNodeDirectoryOptions;

  const usingOperationId = options?.usingOperationId || true;
  const extension = options?.extension || 'ts';
  const getContent =
    typeof options?.getContent === 'function' ? options.getContent : () => '';

  const fileTree: TreeNodeDirectory = {
    type: 'folder',
    name: '',
    children: [],
  };

  Object.entries(groupBy('modelName', compiledStandardModel.apis)).forEach(
    ([name, apis]) => {
      const samePath = options?.usingOperationId
        ? ''
        : getMaxSamePath(apis.map((api) => api.path.slice(1)));

      const children: TreeNode[] = apis.map((api) => {
        const standaloneName = usingOperationId
          ? getNameFromOperatorId(api.standaloneName)
          : getNameFromPath(api.path, api.method, samePath);

        return {
          type: 'file',
          name: `${standaloneName}.${extension}`,
          content: getContent(api, compiledStandardModel),
        };
      });

      if (name) {
        fileTree.children.push({
          type: 'folder',
          name,
          children,
        });
        return;
      }

      fileTree.children = fileTree.children.concat(children);
    },
  );

  return fileTree;
};
