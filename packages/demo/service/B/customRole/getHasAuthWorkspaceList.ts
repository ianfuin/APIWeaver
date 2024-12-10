export interface WorkspaceBasicDO {
  workspaceId?: string;
  workspaceName?: string;
}
export interface Query {
  /**
   * workType
   */
  workType: string;
  /**
   * operate
   */
  operate?: string;
  /**
   * needCheckStrictAuth
   */
  needCheckStrictAuth?: boolean;
}

/**
 * OK
 */
export type Response = WorkspaceBasicDO[];

const path = '/api/v2/customRole/hasAuthWorkspaceList';
const method = 'get';
