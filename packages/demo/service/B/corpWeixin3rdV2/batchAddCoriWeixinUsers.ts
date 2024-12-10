export interface BatchAddCorpWeixinUserModel {
  corpWeixinUsers?: object;
  isAdmin?: boolean;
  isAuthAdmin?: boolean;
  orgId?: string;
  roleList?: number[];
  userType?: number;
  usergroupIds?: string[];
}

export type Body = BatchAddCorpWeixinUserModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/organization/corpweixin3rd/batchAddUsers';
const method = 'post';
