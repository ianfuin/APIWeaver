export interface TreeNode {
  auth3rdFlag?: number;
  authLevel?: number;
  catalogId?: string;
  catalogName?: string;
  children?: TreeNode[];
  comments?: string;
  creatorId?: string;
  globalParam?: DashboardGlobalParamDO[];
  gmtModified?: string;
  hasAuth?: boolean;
  hasEditAuth?: boolean;
  hasPublished?: string;
  isFavorite?: string;
  isValid?: string;
  modifyUser?: string;
  modifyUserId?: string;
  namespaceId?: string;
  organization?: OrganizationVO;
  ownerName?: string;
  ownerNum?: string;
  permissionList?: string[];
  pid?: string;
  privState?: string;
  productionGmtCreate?: string;
  productionGmtModified?: string;
  publishType?: string;
  reportType?: string;
  shareFrom?: string;
  shareFromName?: string;
  subType?: number;
  treeId?: string;
  treeName?: string;
  type?: string;
  version?: string;
  workspaceId?: string;
  workspaceName?: string;
  workspaceType?: number;
}
export interface DashboardGlobalParamDO {
  config?: string;
  createUser?: string;
  dashboardId?: string;
  gmtCreate?: string;
  id?: number;
  paramContent?: string;
  paramKey?: string;
}
export interface OrganizationVO {
  organizationId?: string;
  organizationName?: string;
  quanYuOrganization?: boolean;
}
export interface Query {
  /**
   * treeName
   */
  treeName: string;
  /**
   * pid
   */
  pid: string;
  /**
   * type
   */
  type: string;
  /**
   * workspaceId
   */
  workspaceId: string;
}

/**
 * OK
 */
export type Response = TreeNode;

const path = '/api/v2/catalog/saveFolder';
const method = 'post';
