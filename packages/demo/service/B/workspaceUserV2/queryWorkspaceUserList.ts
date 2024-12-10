export interface WorkspaceUserQueryEvent {
  keyword?: string;
  pageNum?: number;
  pageSize?: number;
  roleIds?: number[];
  targetWorkspaceId?: string;
}
export interface PaginatedValWorkspaceUserModel {
  data?: WorkspaceUserModel[];
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
export interface WorkspaceUserModel {
  accountId?: string;
  accountName?: string;
  accountType?: number;
  aliyunToken?: string;
  avatarType?: number;
  baseId?: string;
  creator?: boolean;
  description?: string;
  gmtModified?: string;
  grayVersion?: number;
  id?: number;
  isDeleted?: boolean;
  mail?: string;
  nick?: string;
  nickname?: string;
  oversideToken?: string;
  owner?: boolean;
  parentAccountId?: string;
  parentAccountName?: string;
  phone?: string;
  registerTime?: string;
  roleList?: number[];
  tokenType?: number;
  userId?: string;
  userType?: number;
  version?: string;
  wangwang?: string;
  yunAccount?: string;
}
export interface OrderBy {
  order?: string;
  orderBy?: string;
}

export type Body = WorkspaceUserQueryEvent;

/**
 * OK
 */
export type Response = PaginatedValWorkspaceUserModel;

const path = '/api/v2/workspaceUser/pagingList';
const method = 'post';
