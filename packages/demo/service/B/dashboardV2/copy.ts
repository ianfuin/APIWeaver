export interface DashboardBO {
  auth3rdFlag?: number;
  authLevel?: number;
  branchVersion?: string;
  components?: DashboardComponentBO[];
  cubeBlends?: string;
  cubeShadows?: string;
  dashboardContent?: string;
  description?: string;
  favorite?: boolean;
  globalCascadeModel?: string;
  globalParam?: GlobalParamBO[];
  gmtCreate?: string;
  gmtModified?: string;
  layout?: string;
  modifyUser?: string;
  name?: string;
  originDashboardId?: string;
  owner?: string;
  ownerName?: string;
  ownerSysVersion?: number;
  pId?: string;
  permissionList?: string[];
  publishStatus?: number;
  screens?: DashboardScreenModel[];
  setting?: string;
  shareToWorkspace?: number;
  subType?: number;
  themeInfo?: ThemeDO;
  treeId?: string;
  type?: string;
  useLoginUserAsModifyUser?: boolean;
  version?: string;
  workspaceId?: string;
  wsId?: string;
}
export interface BaseDashboardBO {
  auth3rdFlag?: number;
  authLevel?: number;
  branchVersion?: string;
  cubeBlends?: string;
  cubeShadows?: string;
  dashboardContent?: string;
  description?: string;
  favorite?: boolean;
  globalCascadeModel?: string;
  globalParam?: GlobalParamBO[];
  gmtCreate?: string;
  gmtModified?: string;
  layout?: string;
  modifyUser?: string;
  name?: string;
  originDashboardId?: string;
  owner?: string;
  ownerName?: string;
  ownerSysVersion?: number;
  pId?: string;
  permissionList?: string[];
  publishStatus?: number;
  setting?: string;
  shareToWorkspace?: number;
  subType?: number;
  themeInfo?: ThemeDO;
  treeId?: string;
  type?: string;
  useLoginUserAsModifyUser?: boolean;
  version?: string;
  workspaceId?: string;
  wsId?: string;
}
export interface DashboardComponentBO {
  componentContent?: string;
  componentId?: string;
  componentName?: string;
  componentType?: number;
  customComponentId?: string;
  dashboardId?: string;
  dataFromId?: string;
  dataFromType?: number;
  drillComponent?: string;
  fieldEnumList?: QueryFieldEnumBO[];
  gmtCreate?: string;
  gmtModified?: string;
  jsonSource?: string;
  orderNumber?: number;
  queryInput?: string;
  queryParam?: string;
  screenId?: string;
}
export interface GlobalParamBO {
  config?: string;
  createUser?: string;
  dashboardId?: string;
  gmtCreate?: string;
  id?: number;
  paramContent?: string;
  paramKey?: string;
}
export interface DashboardScreenModel {
  components?: DashboardComponentBO[];
  layout?: string;
  screenId?: string;
  setting?: string;
  title?: string;
}
export interface ThemeDO {
  createTime?: string;
  createUserId?: string;
  createUserName?: string;
  id?: number;
  imageFileList?: string[];
  isDeleted?: number;
  mobileThumbnail?: string;
  modifyTime?: string;
  modifyUserId?: string;
  modifyUserName?: string;
  organizationId?: string;
  themeConfig?: string;
  themeIcon?: string;
  themeId?: string;
  themeName?: string;
  themeType?: string;
  thumbnail?: string;
  usageCount?: number;
}
export interface Query {
  /**
   * workspaceId
   */
  workspaceId: string;
}

export interface Path {
  /**
   * dashboardId
   */
  dashboardId: string;
}
export type Body = DashboardBO;

/**
 * OK
 */
export type Response = BaseDashboardBO;

const path = '/api/v2/dashboard/{dashboardId}/copy';
const method = 'post';
