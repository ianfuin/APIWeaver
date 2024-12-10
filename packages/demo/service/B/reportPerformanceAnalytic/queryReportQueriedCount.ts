export interface ReportQueriedCountModel {
  result?: QueriedTypeCount[];
}
export interface QueriedTypeCount {
  count?: number;
  type?: string;
}
export interface Query {
  /**
   * workspaceId
   */
  workspaceId?: string;
}

/**
 * OK
 */
export type Response = ReportQueriedCountModel;

const path = '/api/v2/auditlog/analysis/report/queryReportQueriedCount';
const method = 'get';
