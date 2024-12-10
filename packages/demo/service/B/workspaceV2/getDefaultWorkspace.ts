export interface WorkspaceSimpleDO {
  roleId?: number;
  workspaceId?: string;
  workspaceName?: string;
  workspaceType?: number;
}

/**
 * OK
 */
export type Response = WorkspaceSimpleDO;

const path = '/api/v2/ws/defaultWorkspace';
const method = 'get';
