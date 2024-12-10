export interface MobileBindingModel {
  mobileUserIdMap?: object;
  userId?: string;
}
export interface MobileBindingResultModel {
  mobileBindedUserInfoMap?: object;
}

export type Body = MobileBindingModel;

/**
 * OK
 */
export type Response = MobileBindingResultModel;

const path = '/api/v2/organization/mobile/makeMobileBinding';
const method = 'post';
mobile/batchAddUsers';
const method = 'post';
