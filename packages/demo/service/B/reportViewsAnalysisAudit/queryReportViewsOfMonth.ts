export interface ReportViewsOfDurationModel {
  /**
   * 活跃资源数
   */
  activeResourceCount?: number;
  /**
   * 环比
   */
  chainRatioOfDuration?: number;
  /**
   * 周期，月/日
   */
  duration?: string;
  /**
   * 一个周期内的访问人数
   */
  uniqueViews?: number;
  /**
   * 一个周期内的访问量汇总
   */
  viewsOfDuration?: number;
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
export type Response = ReportViewsOfDurationModel[];

const path = '/api/v2/auditlog/analysis/views/queryReportViewsOfMonth';
const method = 'get';
