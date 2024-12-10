export interface QueryActiveResourceRequestModel {
  endDate?: string;
  queryType?: string;
  resourceIds?: string[];
  resourceType?: string;
  startDate?: string;
  userId?: string;
  workspaceId?: string;
}
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

export type Body = QueryActiveResourceRequestModel;

/**
 * OK
 */
export type Response = ReportViewsOfDurationModel[];

const path = '/api/v2/auditlog/analysis/views/queryActiveResourceTrending';
const method = 'post';
