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

export interface Path {
  /**
   * treeId
   */
  treeId: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/publish/trees/{treeId}';
const method = 'put';
