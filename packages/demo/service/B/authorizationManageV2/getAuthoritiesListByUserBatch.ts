export interface AuthorizeUserBatchQueryModel {
  allWorkspace?: boolean;
  hasAuth?: boolean;
  keyword?: string;
  userId?: string;
  userType?: number;
  worksType?: string;
  workspaceIds?: string[];
}
export interface AuthorizeUserBatchResultModel {
  authCount?: number;
  authorityModel?: AuthorityCatalogModel[];
  roleIdList?: number[];
  workspaceAdmin?: boolean;
  workspaceId?: string;
  workspaceName?: string;
}
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

export type Body = AuthorizeUserBatchQueryModel;

/**
 * OK
 */
export type Response = AuthorizeUserBatchResultModel[];

const path = '/api/v2/authorize/user/auth/batch';
const method = 'post';
