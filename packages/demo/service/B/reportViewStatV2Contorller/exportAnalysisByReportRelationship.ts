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
}

/**
 * OK
 */
export type Response = ReportRelationshipDO[];

const path = '/api/v2/auditlog/analysis/export/byReportRelation';
const method = 'get';
