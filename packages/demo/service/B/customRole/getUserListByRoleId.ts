export interface PaginatedValCustomRoleBindModel {
  data?: CustomRoleBindModel[];
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
export interface CustomRoleBindModel {
  nickName?: string;
  roleList?: number[];
  userId?: string;
  workspaceId?: string;
  workspaceName?: string;
}
export interface OrderBy {
  order?: string;
  orderBy?: string;
}
export interface Query {
  /**
   * roleType
   */
  roleType?: number;
  /**
   * roleId
   */
  roleId: number;
  /**
   * pageNum
   */
  pageNum?: number;
  /**
   * pageSize
   */
  pageSize?: number;
  /**
   * workspaceId
   */
  workspaceId?: string;
  /**
   * keyword
   */
  keyword?: string;
}

/**
 * OK
 */
export type Response = PaginatedValCustomRoleBindModel;

const path = '/api/v2/customRole/getUserListByRoleId';
const method = 'get';
