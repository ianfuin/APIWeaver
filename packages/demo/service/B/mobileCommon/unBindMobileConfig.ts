export interface MobileBindReqModel {
  mobileType?: string;
}
export interface MobileBindingResultModel {
  mobileBindedUserInfoMap?: object;
}

export type Body = MobileBindReqModel;

/**
 * OK
 */
export type Response = MobileBindingResultModel;

const path = '/api/v2/organization/mobile/unBinding';
const method = 'delete';
