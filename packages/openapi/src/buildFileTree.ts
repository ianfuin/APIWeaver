import type { JSONSchema } from '@apiweaver/core';
import { groupBy } from 'lodash/fp';

import type { OpenAPIJSON } from './types/openapi';

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

interface PathObject {
  path: string;
  httpMethod: string;
  contentType: string[];
  description?: string;
  interfaceSchema?: JSONSchema;
}

interface APIObject {
  description?: string;
  basePath?: string;
  paths?: PathObject[];
}

export function buildFileTree(openapiJSON: OpenAPIJSON) {
  if (!openapiJSON) return null;

  //   const { info, tags, paths, components } = openapiJSON;

  const tags = Array.isArray(openapiJSON.tags) ? openapiJSON.tags : [];
  const tagObject = groupBy('name', tags);
}
