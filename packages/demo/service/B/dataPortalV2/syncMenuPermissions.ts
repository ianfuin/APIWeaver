export interface MenuSyncSettingModel {
  dataPortalId?: string;
  menuId?: string;
  newMenuPermissions?: MenuPermissionDO[];
  overload?: boolean;
  syncMenuIds?: string[];
}
export interface MenuPermissionDO {
  authPointsValue?: number;
  gmtCreate?: string;
  gmtModified?: string;
  menuId?: string;
  portalId?: string;
  receiverId?: string;
  receiverType?: number;
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
export type Body = MenuSyncSettingModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/dataportal/{dataPortalId}/menu/{menuId}/sync/permissions';
const method = 'put';
