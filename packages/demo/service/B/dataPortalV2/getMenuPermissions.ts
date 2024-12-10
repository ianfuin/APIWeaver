export interface MenuPermissionSettingsModel {
  menuPermissionList?: MenuPermissionModel[];
}
export interface MenuPermissionModel {
  menuId?: string;
  originalRecords?: MenuPermissionDO[];
  receiverList?: MenuReceiverModel[];
  showOnlyWithAccess?: boolean;
}

export interface Path {
  /**
   * dataPortalId
   */
  dataPortalId: string;
}

/**
 * OK
 */
export type Response = MenuPermissionSettingsModel;

const path = '/api/v2/dataportal/{dataPortalId}/menupermissions';
const method = 'get';
