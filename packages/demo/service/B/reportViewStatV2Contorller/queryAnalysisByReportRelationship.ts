export interface PaginatedValReportRelationshipDO {
  data?: ReportRelationshipDO[];
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
export interface ReportRelationshipDO {
  cubeId?: string;
  cubeName?: string;
  dsId?: string;
  dsName?: string;
  organizationId?: string;
  pageIndex?: number;
  pageNum?: number;
  pageSize?: number;
  reportId?: string;
  reportName?: string;
  reportType?: string;
  reportTypeDesc?: string;
  tableName?: string;
  totalNum?: number;
  workspaceId?: string;
  workspaceName?: string;
  workspaceOwnerAccountName?: string;
  workspaceOwnerNickName?: string;
  workspaceType?: number;
}
export interface OrderBy {
  order?: string;
  orderBy?: string;
}
export interface Query {
  /**
   * wsId
   */
  wsId: string;
  /**
   * reportType
   */
  reportType: string;
  /**
   * reportId
   */
  reportId?: string;
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
export type Response = PaginatedValReportRelationshipDO;

const path = '/api/v2/auditlog/analysis/byReportRelation';
const method = 'get';
