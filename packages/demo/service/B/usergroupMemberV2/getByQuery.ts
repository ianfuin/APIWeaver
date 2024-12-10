export interface UsergroupMemberExtendedDO {
  id?: string;
  isUsergroup?: boolean;
  name?: string;
  parentUsergroupId?: string;
  parentUsergroupName?: string;
  roleList?: string;
  sortedKey?: number;
  userType?: number;
  usergroupType?: string;
}
export interface Query {
  usergroupId?: string;
  keyword?: string;
  sortBy?: string;
  sortType?: string;
  pageNum?: number;
  pageSize?: number;
}

/**
 * OK
 */
export type Response = UsergroupMemberExtendedDO[];

const path = '/api/v2/usergroup/member/pagingList';
const method = 'get';
