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
   * workspaceId
   */
  workspaceId?: string;
  /**
   * receiverType
   */
  receiverType?: number;
  /**
   * authFrom
   */
  authFrom?: number;
  /**
   * hasAuth
   */
  hasAuth?: boolean;
  /**
   * keyword
   */
  keyword?: string;
  /**
   * authPoint
   */
  authPoint?: number;
  /**
   * pageNo
   */
  pageNo?: number;
  /**
   * pageSize
   */
  pageSize?: number;
}

export interface Path {
  /**
   * dataPortalId
   */
  dataPortalId: string;
  /**
   * menuId
   */
  menuId: string;
}

/**
 * OK
 */
export type Response = PaginatedValAuthorityResultModel;

const path = '/api/v2/dataportal/{dataPortalId}/menu/{menuId}/permission';
const method = 'get';
