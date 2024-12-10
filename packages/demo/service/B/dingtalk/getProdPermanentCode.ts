export interface Query {
  /**
   * corpId
   */
  corpId: string;
  /**
   * hookToken
   */
  hookToken: string;
}

/**
 * OK
 */
export type Response = string;

const path = '/api/v2/dingtalk/getProdPermanentCode';
const method = 'get';
