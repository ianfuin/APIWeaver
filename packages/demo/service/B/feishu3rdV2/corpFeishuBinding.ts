export interface MobileBindedUserInfo {
  mobileUserId?: string;
  mobileUserName?: string;
}
export interface Query {
  /**
   * code
   */
  code: string;
  /**
   * feishuRedirect
   */
  feishuRedirect?: string;
}

/**
 * OK
 */
export type Response = MobileBindedUserInfo;

const path = '/api/v2/organization/feishu3rd/binding';
const method = 'get';
