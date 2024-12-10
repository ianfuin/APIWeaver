export interface Query {
  /**
   * hookToken
   */
  hookToken: string;
}

/**
 * OK
 */
export type Response = string;

const path = '/api/v2/dingtalk/getProdSuiteTicket';
const method = 'get';
