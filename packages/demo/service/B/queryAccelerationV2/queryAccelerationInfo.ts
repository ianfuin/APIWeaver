export interface CubeAccelerateStatusModel {
  /**
   * 加速任务状态
   */
  accelerateStatus?: string;
  /**
   * 是否开启缓存
   */
  cubeCacheOpen?: boolean;
  /**
   * 是否开启维值加速
   */
  cubeDimensionOpen?: boolean;
  /**
   * 加速配置页面推荐建议,[ODPS、ADB、MYSQL]
   */
  datasourceType?: string;
  /**
   * 任务错误码, 0-抽取引擎空间不足, 1-抽取运行失败, 2-同步行数为零
   */
  errorCode?: number;
  /**
   * 任务错误时间
   */
  errorTime?: string;
  /**
   * 全局缓存是否开启
   */
  globalCacheOpen?: boolean;
  /**
   * 已经配置过全局缓存
   */
  hasConfiguredGlobalCache?: boolean;
  /**
   * 是否有跨源
   */
  hasCrossDatasource?: boolean;
  /**
   * 是否有关联查询
   */
  hasJoin?: boolean;
  /**
   * 是否自定义SQL中含有参数、占位符、tag参数，暂时不支持离线加速[true-有，false-没有]
   */
  hasSpecialParam?: boolean;
  /**
   * 加速已开启，但加速任务有错误
   */
  jobHasError?: boolean;
  /**
   * 加速已开启，但加速任务有警告
   */
  jobHasWarn?: boolean;
  /**
   * 任务历史id
   */
  jobHistoryId?: string;
  /**
   * 任务id
   */
  jobId?: string;
  /**
   * 加速引擎的提示，如 odps 是公网连接
   */
  quickIndexHint?: string;
  /**
   * 是否开启加速引擎
   */
  quickindexOpen?: boolean;
  /**
   * 推荐建议展示信息类型。0-不展示建议 1-展示'了解加速引擎' 2-展示MaxCompute数据源提示信息 3-展示ADB数据源提示信息 4-展示MySQL数据源信息
   */
  suggestionType?: number;
  /**
   * 是否支持预计算，对应配置页面上是否展示预计算
   */
  supportCubeBuild?: boolean;
  /**
   * 是否支持维值加速，对应配置页面上是否展示维值加速
   */
  supportDimension?: boolean;
  /**
   * 是否支持抽取加速，对应配置页面上是否展示抽取加速
   */
  supportOffline?: boolean;
  /**
   * 是否支持Quick引擎，如果是false，不显示Quick引擎配置页面，并且展示 '了解加速引擎'
   */
  supportQuickIndex?: boolean;
  /**
   * 数据源是否支持实时加速，对应配置页面上是否展示实时加速
   */
  supportRealTime?: boolean;
  /**
   * 使用全局缓存策略
   */
  useGlobalCachePolicy?: boolean;
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
export type Response = CubeAccelerateStatusModel;

const path = '/api/v2/acceleration/cube/{cubeId}/queryAccelerationInfo';
const method = 'get';
