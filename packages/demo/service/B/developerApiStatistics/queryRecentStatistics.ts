export interface StatisticsInDateInfoVo {
  avgRespTime?: number;
  callCount?: number;
  failCount?: number;
  failRatio?: number;
  logDate?: string;
  successCount?: number;
  successRatio?: number;
}
export interface Query {
  /**
   * apiId
   */
  apiId?: string;
}

/**
 * OK
 */
export type Response = StatisticsInDateInfoVo[];

const path = '/api/v2/developerApi/recent';
const method = 'get';
