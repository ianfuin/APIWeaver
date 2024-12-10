export interface AccessTokenVo {
  accessToken?: string;
  invalidTime?: string;
  registerTime?: string;
  tokeType?: number;
  validTime?: number;
}
export interface Query {
  /**
   * pageId
   */
  pageId: string;
}

/**
 * OK
 */
export type Response = AccessTokenVo;

const path = '/api/v2/dashboard/token';
const method = 'get';
