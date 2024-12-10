export interface MenuSettingModel {
  showOnlyWithAccess?: boolean;
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
export type Body = MenuSettingModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/dataportal/{dataPortalId}/menu/{menuId}';
const method = 'put';
