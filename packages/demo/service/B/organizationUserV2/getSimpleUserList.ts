export interface PaginatedValOrganizationUserSimpleVo {
  data?: OrganizationUserSimpleVo[];
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
export interface OrganizationUserSimpleVo {
  id?: string;
  name?: string;
  roleList?: number[];
  userType?: number;
}
export interface OrderBy {
  order?: string;
  orderBy?: string;
}
export interface Query {
  /**
   * keyword
   */
  keyword?: string;
  /**
   * pageNum
   */
  pageNum?: number;
  /**
   * pageSize
   */
  pageSize?: number;
}

/**
 * OK
 */
export type Response = PaginatedValOrganizationUserSimpleVo;

const path = '/api/v2/organizationUser/pagingListUser';
const method = 'get';
