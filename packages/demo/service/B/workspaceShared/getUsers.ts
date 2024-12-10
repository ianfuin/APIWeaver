export interface SharedWorksToWorkspaceUserQuery {
  keyword?: string;
  pageNum?: number;
  pageSize?: number;
  worksId?: string;
  workspaceId?: string;
}
export interface PaginatedValWorkspaceSharedUserModel {
  data?: WorkspaceSharedUserModel[];
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
export interface WorkspaceSharedUserModel {
  nickname?: string;
  userId?: string;
  worksId?: string;
}
export interface OrderBy {
  order?: string;
  orderBy?: string;
}

export interface Path {
  /**
   * grantType
   */
  grantType: number;
}
export type Body = SharedWorksToWorkspaceUserQuery;

/**
 * OK
 */
export type Response = PaginatedValWorkspaceSharedUserModel;

const path = '/api/v2/shared/granted/{grantType}';
const method = 'post';
