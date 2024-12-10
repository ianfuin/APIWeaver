export interface MenuPermissionSingleModel {
  authPointsValue?: number;
  operation?: string;
  receiverId?: string;
  receiverName?: string;
  receiverType?: number;
  showOnlyWithAccess?: boolean;
  workspaceId?: string;
  workspaceName?: string;
  workspaceRoleId?: number;
}
export interface Query {
  /**
   * workspaceId
   */
  workspaceId?: string;
}

export interface Path {
  /**
   * dataPortalId
   */
  dataPortalId: string;
  /**
   * menuId
   */
  menuId: string;
}
export type Body = MenuPermissionSingleModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/dataportal/{dataPortalId}/menu/{menuId}/permission';
const method = 'post';
