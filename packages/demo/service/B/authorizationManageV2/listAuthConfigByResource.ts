export interface PaginatedValAuthorityResultModel {
  data?: AuthorityResultModel[];
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
export interface AuthorityResultModel {
  admin?: boolean;
  authFrom?: number;
  authId?: string;
  authorities?: string[];
  authorityInfos?: AuthorityInfoModel[];
  authorityPoints?: number;
  authorityReason?: object;
  authorizedId?: string;
  authorizedName?: string;
  children?: AuthorityResultModel[];
  creatorId?: string;
  creatorName?: string;
  expireDate?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: string;
  inheritFrom?: number;
  name?: string;
  owner?: boolean;
  resourceId?: string;
  resourceName?: string;
  resourceType?: string;
  scope?: number;
  workspaceId?: string;
  workspaceName?: string;
  workspaceRoleList?: number[];
}
export interface OrderBy {
  order?: string;
  orderBy?: string;
}
export interface Query {
  /**
   * 选中资源id
   */
  resourceId: string;
  /**
   * 资源类型
   */
  worksType: string;
  /**
   * 空间id
   */
  workspaceId: string;
  /**
   * 被授权对象类型
   */
  shareToType?: number;
  /**
   * 是否拥有权限
   */
  hasAuth: boolean;
  /**
   * 选中的权限点
   */
  authPoint?: number;
  /**
   * 搜索关键字
   */
  keyword?: string;
  /**
   * 分页
   */
  pageNo?: number;
  /**
   * 分页条数
   */
  pageSize?: number;
}

/**
 * OK
 */
export type Response = PaginatedValAuthorityResultModel;

const path = '/api/v2/authorize/resource/auth';
const method = 'get';
