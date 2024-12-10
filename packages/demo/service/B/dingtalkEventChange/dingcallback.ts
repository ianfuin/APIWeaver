export interface DingRequestEntity {
  encrypt?: string;
}
export interface Query {
  /**
   * signature
   */
  signature: string;
  /**
   * timestamp
   */
  timestamp: string;
  /**
   * nonce
   */
  nonce: string;
}

export type Body = DingRequestEntity;

/**
 * OK
 */
export type Response = object;

const path = '/rawapi/v2/dingtalk/dingcallback';
const method = 'post';
