export interface BatchAddFeishuUserModel {
  admin?: boolean;
  authAdmin?: boolean;
  feishuUsers?: object;
  isAdmin?: boolean;
  isAuthAdmin?: boolean;
  roleList?: number[];
  userType?: number;
  userTypeMap?: object;
  usergroupIds?: string[];
}

export type Body = BatchAddFeishuUserModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/organization/feishu/batchAddUsers';
const method = 'post';
