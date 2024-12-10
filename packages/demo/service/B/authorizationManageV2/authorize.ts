export interface AuthorizeModel {
  authPoints?: number;
  authorizeScope?: number;
  authorizedId?: string;
  expireDay?: string;
  resourceId?: string;
  resourceType?: string;
  workspaceId?: string;
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

export type Body = AuthorizeModel;

/**
 * OK
 */
export type Response = AuthorityResultModel;

const path = '/api/v2/authorize';
const method = 'post';
