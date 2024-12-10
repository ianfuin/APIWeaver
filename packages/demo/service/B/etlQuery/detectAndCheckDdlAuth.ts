export interface EtlDataSourceDetectResultModel {
  /**
   * 是否有建表权限
   */
  hasDdlAuth?: boolean;
  /**
   * spark连通数据源是否ok
   */
  sparkConnectedOk?: boolean;
  /**
   * 白名单列表
   */
  whiteIpList?: string;
}
export interface Query {
  /**
   * dsId
   */
  dsId: string;
  /**
   * 强制探测数据源在spark中的连通性,不走缓存
   */
  forceDetect?: boolean;
  /**
   * 是否需要检测ddl权限
   */
  checkDdlAuth?: boolean;
  /**
   * workspaceId
   */
  workspaceId: string;
}

/**
 * OK
 */
export type Response = EtlDataSourceDetectResultModel;

const path = '/api/v2/etl/query/detectAndCheckDdlAuth';
const method = 'get';
