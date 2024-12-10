export interface WxSimpleUserInfoModel {
  department?: string[];
  name?: string;
  open_userid?: string;
  userid?: string;
}
export interface Query {
  /**
   * deptId
   */
  deptId?: string;
  /**
   * fetchChild
   */
  fetchChild?: boolean;
}

/**
 * OK
 */
export type Response = WxSimpleUserInfoModel[];

const path = '/api/v2/organization/corpweixin/deptUserList';
const method = 'get';
