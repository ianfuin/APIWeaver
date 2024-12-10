export interface QueryActiveResourceRequestModel {
  endDate?: string;
  queryType?: string;
  resourceIds?: string[];
  resourceType?: string;
  startDate?: string;
  userId?: string;
  workspaceId?: string;
}
export interface ActiveResourceRankingsModel {
  /**
   * 资源id
   */
  resourceId?: string;
  /**
   * 资源名称
   */
  resourceName?: string;
  /**
   * 累计访问次数
   */
  resourceViews?: number;
}

export type Body = QueryActiveResourceRequestModel;

/**
 * OK
 */
export type Response = ActiveResourceRankingsModel[];

const path = '/api/v2/auditlog/analysis/views/queryActiveResourceRankings';
const method = 'post';
