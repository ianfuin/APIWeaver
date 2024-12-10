export interface Query {
  /**
   * sessionId
   */
  sessionId: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/auth_sso/device/logout';
const method = 'post';
