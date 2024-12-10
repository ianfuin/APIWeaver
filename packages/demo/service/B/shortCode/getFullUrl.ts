export interface ShortUrlModel {
  treeId?: string;
  type?: string;
  workspaceId?: string;
}

export type Body = ShortUrlModel;

/**
 * OK
 */
export type Response = string;

const path = '/api/v2/shortCode/get';
const method = 'post';
