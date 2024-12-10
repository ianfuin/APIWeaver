export interface PaginatedValWorkspaceDO {
  data?: WorkspaceDO[];
  next?: number;
  orderBy?: OrderBy[];
  orderString?: string;
  pageNum?: number;
  pageSize?: number;
  pre?: number;
  start?: number;
  totalNum?: number;
  totalPages?: number;
}
export interface WorkspaceDO {
  allowAuthorize3rd?: boolean;
  allowExport?: boolean;
  allowPublish?: boolean;
  allowShare?: boolean;
  allowViewAll?: boolean;
  createUser?: string;
  createUserAccountName?: string;
  cubeCnt?: number;
  dashboardCnt?: number;
  dataProductCnt?: number;
  defaultShareToAll?: boolean;
  etlDefaultDsId?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  isDefault?: boolean;
  isDemo?: boolean;
  memberCnt?: number;
  modifyUser?: string;
  modifyUserAccountName?: string;
  onlyAdminCreateDatasource?: boolean;
  organizationId?: string;
  owner?: string;
  ownerAccountName?: string;
  roleId?: number;
  roleList?: number[];
  shareOutsideOrganization?: boolean;
  status?: number;
  useComment?: boolean;
  worksSyncCubeFieldComment?: boolean;
  workspaceDesc?: string;
  workspaceId?: string;
  workspaceName?: string;
  workspaceType?: number;
}
export interface OrderBy {
  order?: string;
  orderBy?: string;
}
export interface Query {
  /**
   * userId
   */
  userId?: string;
  /**
   * keyword
   */
  keyword?: string;
  /**
   * pageNum
   */
  pageNum?: number;
  /**
   * pageSize
   */
  pageSize?: number;
  /**
   * needAccount
   */
  needAccount?: boolean;
}

/**
 * OK
 */
export type Response = PaginatedValWorkspaceDO;

const path = '/api/v2/ws/find';
const method = 'get';
