export interface DataPortalModel {
  auth3rdFlag?: number;
  authLevel?: number;
  authMode?: number;
  branchVersion?: string;
  dataPortalSetting?: string;
  dataPortalShortName?: string;
  description?: string;
  gmtCreate?: string;
  gmtModified?: string;
  logo?: string;
  menuList?: DataPortalMenuModel[];
  modifyUser?: string;
  name?: string;
  originDashboardId?: string;
  owner?: string;
  ownerName?: string;
  pId?: string;
  permissionList?: string[];
  publishStatus?: number;
  shareToWorkspace?: number;
  subType?: number;
  treeId?: string;
  type?: string;
  version?: string;
  workspaceId?: string;
  wsId?: string;
}
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
}
export type Body = DataPortalModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/dataportal/{dataPortalId}/authMode';
const method = 'put';
