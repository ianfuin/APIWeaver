export interface UserGroupAndMemberVO {
  children?: UserGroupMemberExtendedVO[];
  paths?: UserGroupSimpleVo[];
}
export interface UserGroupMemberExtendedVO {
  id?: string;
  isUsergroup?: boolean;
  name?: string;
  parentUsergroupId?: string;
  roleList?: number[];
  userType?: number;
  usergroupType?: string;
}
export interface UserGroupSimpleVo {
  id?: string;
  identityPath?: string;
  name?: string;
  parentId?: string;
}
export interface Query {
  /**
   * userGroupId
   */
  userGroupId?: string;
  /**
   * keyword
   */
  keyword?: string;
}

/**
 * OK
 */
export type Response = UserGroupAndMemberVO;

const path = '/api/v2/usergroup/member/list';
const method = 'get';
