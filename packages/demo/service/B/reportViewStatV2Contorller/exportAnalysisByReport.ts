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
export interface Query {
  /**
   * theMonth
   */
  theMonth: string;
  /**
   * wsId
   */
  wsId: string;
}

/**
 * OK
 */
export type Response = ReportViewMonthStatDO[];

const path = '/api/v2/auditlog/analysis/export/byReport';
const method = 'get';
