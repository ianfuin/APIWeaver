export interface DataPortalMenuModel {
  allChildMenuIdList?: string[];
  canApply?: boolean;
  children?: DataPortalMenuModel[];
  dataPortalId?: string;
  dependentPermission?: boolean;
  displayOrder?: number;
  hasApplying?: boolean;
  isHide?: number;
  menuId?: string;
  menuName?: string;
  menuSetting?: string;
  menuType?: number;
  needApply?: boolean;
  ownerName?: string;
  reportName?: string;
  showOnlyWithAccess?: boolean;
  subType?: number;
  uri?: string;
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

/**
 * OK
 */
export type Response = DataPortalMenuModel;

const path = '/api/v2/dataportal/{dataPortalId}/menu/{menuId}/info';
const method = 'get';
