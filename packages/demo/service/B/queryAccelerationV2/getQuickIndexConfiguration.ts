export interface QuickEngineModel {
  /**
   * 抽取加速 配置项
   */
  offlineAccelerationConfig?: CubeOfflineAccelerationModel;
  /**
   * 是否开启抽取加速
   */
  openOfflineAcceleration?: boolean;
  /**
   * 是否开启加速引擎
   */
  openQuickIndex?: boolean;
  /**
   * 是否开启实时加速
   */
  openRealTimeAcceleration?: boolean;
  /**
   * 实时加速支持信息
   */
  supportRealTime?: SupportRealTime;
}
export interface CubeOfflineAccelerationModel {
  /**
   * 失败报警配置
   */
  alertNotification?: AlertNotification;
  /**
   * 加速时间配置项
   */
  cronConfiguration?: CronConfiguration;
  /**
   * 加速任务状态对象
   */
  jobStatusModel?: JobStatusModel;
  modelVersion?: string;
  /**
   *  1 - 预计算 2 - 全表同步 3 - 全表同步+预计算
   */
  offlineAccelerationType?: number;
  /**
   * 分区配置项
   */
  partitionConfiguration?: PartitionConfiguration;
  /**
   * 是否抽取非聚合计算字段
   */
  syncUDF?: boolean;
}
export interface SupportRealTime {
  /**
   * 当前数据源是否支持
   */
  dataSourceSupport?: boolean;
  /**
   * 组织是否配置了实时加速
   */
  orgConfigDLA?: boolean;
  /**
   * 组织是否开启了实时加速
   */
  orgOpenRealTime?: boolean;
  /**
   * 组织是否支持实时加速(DLA)，用来控制组织未开通DLA的文案
   */
  supportRealTimeAcceleration?: boolean;
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
export type Response = QuickEngineModel;

const path = '/api/v2/acceleration/cube/{cubeId}/getQuickIndexConfiguration';
const method = 'get';
