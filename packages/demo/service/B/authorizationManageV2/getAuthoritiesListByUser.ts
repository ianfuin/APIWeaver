export interface AuthorityCatalogModel {
  authLevel?: number;
  authMode?: number;
  authorities?: string[];
  authorityInfos?: AuthorityInfoModel[];
  authorityPoints?: number;
  authorizedUseType?: number;
  childNode?: AuthorityCatalogModel[];
  directory?: boolean;
  hasMenuAuth?: boolean;
  id?: string;
  menuModels?: AuthorityPortalMenuModel[];
  menuTotalCount?: number;
  name?: string;
  ownerId?: string;
  parentId?: string;
  publishStatus?: number;
  shareToWorkspace?: number;
  type?: string;
  workspaceId?: string;
}
export interface AuthorityInfoModel {
  authFrom?: number;
  authId?: string;
  authorities?: string[];
  authorityPoints?: number;
  authorizedId?: string;
  authorizedName?: string;
  expireDate?: string;
  id?: string;
  inheritFrom?: number;
  name?: string;
  resourceId?: string;
  scope?: number;
}
export interface AuthorityPortalMenuModel {
  authFrom?: number;
  authorities?: string[];
  authorityInfos?: AuthorityInfoModel[];
  authorityPoints?: number;
  childNode?: AuthorityPortalMenuModel[];
  dataPortalId?: string;
  id?: string;
  menuType?: number;
  name?: string;
  ownerName?: string;
  reportName?: string;
  showOnlyWithAccess?: boolean;
  workspaceId?: string;
}
export interface Query {
  /**
   * userId
   */
  userId: string;
  /**
   * userType
   */
  userType: string;
  /**
   * worksType
   */
  worksType: string;
  /**
   * workspaceId
   */
  workspaceId: string;
  /**
   * keyword
   */
  keyword?: string;
  /**
   * hasAuth
   */
  hasAuth: boolean;
}

/**
 * OK
 */
export type Response = AuthorityCatalogModel[];

const path = '/api/v2/authorize/user/auth';
const method = 'get';
