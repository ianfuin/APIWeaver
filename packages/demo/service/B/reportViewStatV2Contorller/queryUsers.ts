export interface UserViewStatDO {
  organizationId?: string;
  pageIndex?: number;
  pageNum?: number;
  pageSize?: number;
  reportViewNum?: number;
  reportViewPv?: number;
  theMonth?: string;
  totalNum?: number;
  userAccountId?: string;
  userAccountName?: string;
  userNickName?: string;
}
export interface Query {
  /**
   * fragName
   */
  fragName: string;
}

/**
 * OK
 */
export type Response = UserViewStatDO[];

const path = '/api/v2/auditlog/analysis/queryCondition/users';
const method = 'get';
