export interface AuthDTO {
  bound?: boolean;
  qbiMobileUrl?: string;
}
export interface Query {
  /**
   * code
   */
  code: string;
  /**
   * corpid
   */
  corpid: string;
  /**
   * appid
   */
  appid: string;
}

/**
 * OK
 */
export type Response = AuthDTO;

const path = '/api/v2/dingtalk/auth';
const method = 'get';
