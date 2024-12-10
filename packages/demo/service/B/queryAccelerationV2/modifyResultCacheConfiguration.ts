export interface CubeCacheAccelerationModel {
  cacheCleanTimes?: string[];
  /**
   * 是否开启缓存
   */
  cacheOpen?: boolean;
  /**
   * 缓存时间，单位 分钟
   */
  cacheTime?: number;
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
export type Body = CubeCacheAccelerationModel;

/**
 * OK
 */
export type Response = boolean;

const path =
  '/api/v2/acceleration/cube/{cubeId}/modifyResultCacheConfiguration';
const method = 'put';
