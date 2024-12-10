export interface Query {
  /**
   * workspaceId
   */
  workspaceId: string;
  /**
   * treeType
   */
  treeType: string;
}

export type Body = string[];

/**
 * OK
 */
export type Response = string[];

const path = '/api/v2/publish/batch/trees';
const method = 'post';
