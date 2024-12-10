export interface WorkspaceSimpleDO {
  roleId?: number;
  workspaceId?: string;
  workspaceName?: string;
  workspaceType?: number;
}
export interface Query {
  /**
   * workspaceId
   */
  workspaceId: string;
}

/**
 * OK
 */
export type Response = WorkspaceSimpleDO;

const path = '/api/v2/ws/getSimpleInfo';
const method = 'get';
