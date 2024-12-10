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
export interface GlobalParamBO {
  config?: string;
  createUser?: string;
  dashboardId?: string;
  gmtCreate?: string;
  id?: number;
  paramContent?: string;
  paramKey?: string;
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

export interface Path {
  /**
   * 仪表板id
   */
  dashboardId: string;
  /**
   * 版本号
   */
  versionId: number;
}

/**
 * OK
 */
export type Response = BaseDashboardBO;

const path = '/api/v2/dashboard/recover/{dashboardId}/{versionId}';
const method = 'get';
