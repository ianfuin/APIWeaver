export interface PaginatedValReportViewMonthStatDO {
  data?: ReportViewMonthStatDO[];
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
export interface ReportViewMonthStatDO {
  id?: string;
  organizationId?: string;
  organizationName?: string;
  pageIndex?: number;
  pageNum?: number;
  pageSize?: number;
  pv?: number;
  reportId?: string;
  reportName?: string;
  reportType?: string;
  reportTypeDesc?: string;
  theMonth?: string;
  totalNum?: number;
  userAccountId?: string;
  userAccountName?: string;
  userNickName?: string;
  uv?: number;
  workspaceId?: string;
  workspaceName?: string;
}
export interface OrderBy {
  order?: string;
  orderBy?: string;
}
export interface Query {
  /**
   * theMonth
   */
  theMonth: string;
  /**
   * wsId
   */
  wsId: string;
  /**
   * pageNum
   */
  pageNum: number;
  /**
   * pageSize
   */
  pageSize: number;
}

/**
 * OK
 */
export type Response = PaginatedValReportViewMonthStatDO;

const path = '/api/v2/auditlog/analysis/byReport';
const method = 'get';
