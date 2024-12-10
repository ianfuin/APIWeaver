export interface TreeCatalogDO {
  auth3rdFlag?: number;
  authLevel?: number;
  authorizedUseType?: number;
  description?: string;
  directory?: boolean;
  gmtCreate?: string;
  gmtModified?: string;
  id?: string;
  inFavorite?: boolean;
  issued?: boolean;
  modifyUserName?: string;
  name?: string;
  ownerId?: string;
  ownerName?: string;
  path2Root?: KeyValueStringString[];
  permissionList?: string[];
  pid?: string;
  platformList?: string[];
  publishStatus?: number;
  shareToWorkspace?: number;
  subType?: number;
  type?: string;
  version?: string;
  workspaceId?: string;
}
export interface KeyValueStringString {
  key?: string;
  value?: string;
}
export interface Query {
  /**
   * workspaceId
   */
  workspaceId: string;
  /**
   * type
   */
  type?: string;
  /**
   * keyword
   */
  keyword?: string;
}

/**
 * OK
 */
export type Response = TreeCatalogDO[];

const path = '/api/v2/catalog/list/allWorks';
const method = 'get';
