export interface ReportPagingQueryResultModel {
  data?: ReportQueryResultModel[];
  next?: number;
  pageNum?: number;
  pageSize?: number;
  pre?: number;
  reportCountResult?: ReportCountResultModel[];
  totalNum?: number;
  totalPages?: number;
}
export interface ReportQueryResultModel {
  catalogId?: string;
  catalogName?: string;
  description?: string;
  favorite?: boolean;
  favoriteDate?: string;
  favoriteId?: number;
  gmtCreate?: string;
  gmtModified?: string;
  hasEditAuth?: boolean;
  hasViewAuth?: boolean;
  latestViewTime?: string;
  meLastGmtModified?: string;
  mobileDefault?: boolean;
  modifyUserId?: string;
  modifyUserName?: string;
  name?: string;
  organization?: OrganizationVO;
  organizationId?: string;
  ownerName?: string;
  ownerNum?: string;
  publishStatus?: number;
  shareDate?: string;
  shareExpireDate?: string;
  subType?: number;
  top?: boolean;
  treeId?: string;
  type?: string;
  version?: string;
  viewCount?: number;
  workspaceId?: string;
  workspaceName?: string;
  workspaceType?: number;
}
export interface ReportCountResultModel {
  count?: number;
  treeType?: string;
}
export interface Query {
  /**
   * keyword
   */
  keyword?: string;
  /**
   * treeType
   */
  treeType?: string;
  /**
   * 查询模式 => 1: 常用 2: 最近足迹
   */
  queryMode?: string;
  /**
   * pageNo
   */
  pageNo?: number;
  /**
   * pageSize
   */
  pageSize?: number;
  /**
   * 查询最近多少天的数据
   */
  offsetDay?: number;
}

/**
 * OK
 */
export type Response = ReportPagingQueryResultModel;

const path = '/api/v2/report/recentViewPagingList';
const method = 'get';
