export interface ReportPerformanceAnalyticModel {
  /**
   * 命中缓存平均耗时
   */
  cacheCostTimeAvg?: number;
  /**
   * 命中缓存次数
   */
  cacheQueryCount?: number;
  /**
   * 图表查询次数
   */
  componentQueryCount?: number;
  /**
   * 图表平均查询次数
   */
  componentQueryCountAvg?: number;
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
   * 数据集id
   */
  reportId?: string;
  /**
   * 数据集名称
   */
  reportName?: string;
  /**
   * 数据集id
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
export type Response = ReportPerformanceAnalyticModel[];

const path = '/api/v2/auditlog/analysis/report/queryPerformance';
const method = 'get';
