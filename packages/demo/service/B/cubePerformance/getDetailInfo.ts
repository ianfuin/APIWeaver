export interface CubePerformanceDetailModel {
  /**
   * 数据集诊断基础信息
   */
  baseInfo?: CubePerformanceBasicModel;
  /**
   * 是否有近7天的统计数据
   */
  hasSevenDaysData?: boolean;
  /**
   * 数据集近7天诊断信息
   */
  sevenDaysData?: CubePerformanceDiagnoseModel;
  /**
   * 优化建议
   */
  suggestionType?: string;
}
export interface CubePerformanceBasicModel {
  /**
   * 是否开启缓存
   */
  cacheOpen?: boolean;
  /**
   * 数据集id
   */
  cubeId?: string;
  /**
   * 数据集名称
   */
  cubeName?: string;
  /**
   * 数据源类型
   */
  dsType?: string;
  /**
   * 是否开启Quick引擎
   */
  quickIndexOpen?: boolean;
}
export interface CubePerformanceDiagnoseModel {
  /**
   * 命中缓存平均耗时
   */
  cacheCostTimeAvg?: number;
  /**
   * 命中缓存次数
   */
  cacheQueryCount?: number;
  /**
   * 平均查询时间
   */
  costTimeAvg?: number;
  /**
   * 数据集id
   */
  cubeId?: string;
  /**
   * 数据集名称
   */
  cubeName?: string;
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
   * 空间id
   */
  workspaceId?: string;
  /**
   * 空间名称
   */
  workspaceName?: string;
}

export interface Path {
  /**
   * cubeId
   */
  cubeId: string;
}

/**
 * OK
 */
export type Response = CubePerformanceDetailModel;

const path = '/api/v2/performance/cube/{cubeId}/getDetailInfo';
const method = 'get';
