export interface ComponentPerformanceAnalyticModel {
  /**
   * 命中缓存平均耗时
   */
  cacheCostTimeAvg?: number;
  /**
   * 命中缓存次数
   */
  cacheQueryCount?: number;
  /**
   * 组件id
   */
  componentId?: string;
  /**
   * 组件名称
   */
  componentName?: string;
  /**
   * 平均查询时间
   */
  costTimeAvg?: number;
  /**
   * 查询次数
   */
  queryCount?: number;
  /**
   * 平均查询次数
   */
  queryCountAvg?: number;
  /**
   * 查询超过5s查询次数占比
   */
  queryOverFivePercentNum?: number;
  /**
   * 查询超过5s占比
   */
  queryOverFiveSecPercent?: string;
  /**
   * 查询超过10s占比
   */
  queryOverTenSecPercent?: string;
  /**
   * 查询超过10s查询次数占比
   */
  queryOverTenSecPercentNum?: number;
  /**
   * 图表查询超时次数
   */
  queryTimeoutCount?: number;
  /**
   * 图表查询超时次数占比
   */
  queryTimeoutCountPercent?: number;
  /**
   * 命中Quick引擎平均查询耗时
   */
  quickIndexCostTimeAvg?: number;
  /**
   * 命中Quick引擎次数
   */
  quickIndexQueryCount?: number;
  repeatQueryPercent?: string;
  /**
   * 重复查询占比
   */
  repeatQueryPercentNum?: number;
  /**
   * 重复查询次数
   */
  repeatSqlQueryCount?: number;
  /**
   * 重复查询占比
   */
  repeatSqlQueryPercent?: string;
  /**
   * 所属仪表板名称
   */
  reportId?: string;
  /**
   * 所属仪表板ID
   */
  reportName?: string;
  /**
   * 报表类型
   */
  reportType?: string;
  /**
   * 空间id
   */
  workspaceId?: string;
  /**
   * 空间名称
   */
  workspaceName?: string;
}
export interface Query {
  /**
   * queryType
   */
  queryType?: string;
  /**
   * workspaceId
   */
  workspaceId?: string;
  /**
   * reportId
   */
  reportId?: string;
  /**
   * resourceType
   */
  resourceType?: string;
}

/**
 * OK
 */
export type Response = ComponentPerformanceAnalyticModel[];

const path = '/api/v2/auditlog/analysis/component/queryPerformance';
const method = 'get';
