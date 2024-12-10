export interface DingRequestEntity {
  encrypt?: string;
}
export interface Query {
  /**
   * msg_signature
   */
  msg_signature?: string;
  /**
   * timestamp
   */
  timestamp?: string;
  /**
   * nonce
   */
  nonce?: string;
}

export type Body = DingRequestEntity;

const path = '/rawapi/v2/dingtalk/event/saas/callback';
const method = 'post';
