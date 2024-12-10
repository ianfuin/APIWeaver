export interface FolderCatalogDO {
  authLevel?: number;
  authorizedUseType?: number;
  childNode?: FolderCatalogDO[];
  description?: string;
  directory?: boolean;
  gmtCreate?: string;
  gmtModified?: string;
  id?: string;
  modifyUserName?: string;
  name?: string;
  ownerId?: string;
  ownerName?: string;
  parentId?: string;
  permissionList?: string[];
  pid?: string;
  publishStatus?: number;
  shareToWorkspace?: number;
  subType?: number;
  type?: string;
  version?: string;
  workspaceId?: string;
}
export interface Query {
  /**
   * workspaceId
   */
  workspaceId: string;
}

export interface Path {
  /**
   * type
   */
  type: string;
}

/**
 * OK
 */
export type Response = FolderCatalogDO;

const path = '/api/v2/catalog/{type}/folder';
const method = 'get';
