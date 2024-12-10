export interface PaginatedValUserViewStatDO {
  data?: UserViewStatDO[];
  next?: number;
  orderBy?: OrderBy[];
  orderString?: string;
  pageNum?: number;
  pageSize?: number;
  pre?: number;
  start?: number;
  totalNum?: number;
  totalPages?: number;
}
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
export interface OrderBy {
  order?: string;
  orderBy?: string;
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
  /**
   * pageNum
   */
  pageNum: number;
  /**
   * pageSize
   */
  pageSize: number;
}

/**
 * OK
 */
export type Response = PaginatedValUserViewStatDO;

const path = '/api/v2/auditlog/analysis/byUser';
const method = 'get';
