export interface AccessTokenVo {
  accessToken?: string;
  invalidTime?: string;
  registerTime?: string;
  tokeType?: number;
  validTime?: number;
}
export interface Query {
  /**
   * metricId
   */
  metricId: string;
}

/**
 * OK
 */
export type Response = AccessTokenVo;

const path = '/api/v2/monitor/metric/genToken';
const method = 'post';
