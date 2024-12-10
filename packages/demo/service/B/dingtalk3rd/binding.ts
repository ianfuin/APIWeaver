export interface MobileBindedUserInfo {
  mobileUserId?: string;
  mobileUserName?: string;
}
export interface Query {
  /**
   * authCode
   */
  authCode: string;
}

/**
 * OK
 */
export type Response = MobileBindedUserInfo;

const path = '/api/v2/organization/dingtalk3rd/binding';
const method = 'get';
