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
   * date
   */
  date: string;
}

export interface Path {
  /**
   * apiId
   */
  apiId: string;
}

/**
 * OK
 */
export type Response = StatisticsInDateInfoVo;

const path = '/api/v2/developerApi/{apiId}/statistics';
const method = 'get';
