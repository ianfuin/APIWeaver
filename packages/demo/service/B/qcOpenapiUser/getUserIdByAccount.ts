export interface ResultModelString {
  data?: string;
  errCode?: number;
  errMsg?: string;
  requestId?: string;
}
export interface Query {
  /**
   * aliyunAccount
   */
  aliyunAccount: string;
}

/**
 * OK
 */
export type Response = ResultModelString;

const path = '/qc/openapi/users/findBaseId';
const method = 'get';
