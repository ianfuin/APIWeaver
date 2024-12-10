export interface Query {
  /**
   * open
   */
  open?: boolean;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/auth_sso/account/autoLogout/config';
const method = 'post';
