export interface GlobalCacheConfigModel {
  /**
   * 缓存清除时间
   */
  cacheCleanTimes?: string[];
  /**
   * 是否开启缓存
   */
  cacheOpen?: boolean;
  /**
   * 缓存时间，单位 分钟
   */
  cacheTime?: number;
}

/**
 * OK
 */
export type Response = GlobalCacheConfigModel;

const path = '/api/v2/organization/acceleration/cache';
const method = 'get';
