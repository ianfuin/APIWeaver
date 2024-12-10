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
   * theMonth
   */
  theMonth: string;
  /**
   * userId
   */
  userId?: string;
}

/**
 * OK
 */
export type Response = UserViewStatDO[];

const path = '/api/v2/auditlog/analysis/export/byUser';
const method = 'get';
