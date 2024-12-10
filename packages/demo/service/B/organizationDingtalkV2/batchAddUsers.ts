export interface BatchAddDingtalkUserModel {
  dingtalkUsers?: object;
  isAdmin?: boolean;
  isAuthAdmin?: boolean;
  roleList?: number[];
  userType?: number;
  userTypeMap?: object;
  usergroupIds?: string[];
}

export type Body = BatchAddDingtalkUserModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/organization/dingtalk/batchAddUsers';
const method = 'post';
