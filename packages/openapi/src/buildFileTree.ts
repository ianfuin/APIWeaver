import type { OpenAPIV3_1 } from 'openapi-types';
import { groupBy } from 'lodash/fp';
import type { JSONSchema } from 'json-schema-to-typescript';

type OpenAPIV3_1_JSON = OpenAPIV3_1.Document;

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

export function buildFileTree(openapiJSON: OpenAPIV3_1_JSON) {
  if (!openapiJSON) return null;

  //   const { info, tags, paths, components } = openapiJSON;

  const tags = Array.isArray(openapiJSON.tags) ? openapiJSON.tags : [];
  const tagObject = groupBy('name', tags);
}
