export interface QueryDurationTrendModel {
  /**
   * 日期
   */
  day?: string;
  /**
   * 0~500ms
   */
  range1?: number;
  /**
   * 500ms~1000s
   */
  range2?: number;
  /**
   * 1s~3s
   */
  range3?: number;
  /**
   * 3s~10s
   */
  range4?: number;
  /**
   * >10s
   */
  range5?: number;
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
export type Response = QueryDurationTrendModel[];

const path = '/api/v2/auditlog/analysis/report/queryReportQueryDurationTrend';
const method = 'get';
