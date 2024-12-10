export interface Query {
  /**
   * accountId
   */
  accountId: string;
  /**
   * accessKey
   */
  accessKey: string;
  /**
   * timestamp
   */
  timestamp: string;
  /**
   * nonce
   */
  nonce: string;
  /**
   * signature
   */
  signature: string;
}

const path = '/auth_sso/login/crossDomain/logout.do';
const method = 'post';
