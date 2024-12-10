export interface AuthorizeWorkspaceModel {
  myWorkspace?: WorkspaceUserDetailsModel[];
  otherWorkspace?: WorkspaceUserDetailsModel[];
  userId?: string;
  userType?: number;
}
export interface WorkspaceUserDetailsModel {
  roleIdList?: number[];
  workspaceAdmin?: boolean;
  workspaceId?: string;
  workspaceName?: string;
}
export interface Query {
  /**
   * userId
   */
  userId: string;
  /**
   * userType
   */
  userType: number;
}

/**
 * OK
 */
export type Response = AuthorizeWorkspaceModel;

const path = '/api/v2/authorize/workspace/list';
const method = 'get';
