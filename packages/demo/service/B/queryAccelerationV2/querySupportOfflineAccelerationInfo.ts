export interface QuickIndexSupportInfo {
  /**
   * 是否有跨源
   */
  hasAcrossDataSource?: boolean;
  /**
   * 是否有自定义sql
   */
  hasCustomSql?: boolean;
  /**
   * 是否有关联查询
   */
  hasJoin?: boolean;
  /**
   * 是否自定义SQL中含有参数、占位符、tag参数，暂时不支持离线加速
   */
  hasSpecialParam?: boolean;
  /**
   * 是否有不支持数据源
   */
  hasUnsupportDatasource?: boolean;
  /**
   * 是否支持预计算索引
   */
  supportAggregationIndex?: boolean;
  /**
   * 是否支持跨源抽取
   */
  supportFederatedSync?: boolean;
  /**
   * 是否支持全表索引
   */
  supportTableIndex?: boolean;
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
export type Response = QuickIndexSupportInfo;

const path =
  '/api/v2/acceleration/cube/{cubeId}/querySupportOfflineAccelerationInfo';
const method = 'get';
