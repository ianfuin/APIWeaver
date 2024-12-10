export interface DingtalkAccountModel {
  admin?: boolean;
  authAdmin?: boolean;
  email?: string;
  mobile?: string;
  nickname?: string;
  organizationId?: string;
  unionId?: string;
  userId?: string;
  userType?: number;
  usergroupIds?: string[];
}

export type Body = DingtalkAccountModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/organization/dingtalk/addUser';
const method = 'post';
