export interface MobileBindedUserInfo {
  mobileUserId?: string;
  mobileUserName?: string;
}
export interface Query {
  /**
   * auth_code
   */
  auth_code: string;
}

/**
 * OK
 */
export type Response = MobileBindedUserInfo;

const path = '/api/v2/organization/corpweixin3rd/binding';
const method = 'get';
