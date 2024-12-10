export interface UserIdListEvent {
  userIdList?: string[];
}
export interface UserDeleteCheckModel {
  accountName?: string;
  allowDelete?: boolean;
  operate?: string;
  organizationId?: string;
  userId?: string;
  workspace?: WorkspaceModel[];
  workspaceCount?: number;
}
export interface WorkspaceModel {
  allowPublish?: boolean;
  allowShare?: boolean;
  createUser?: string;
  createUserAccountName?: string;
  default?: boolean;
  gmtCreate?: string;
  gmtModified?: string;
  modifyUser?: string;
  modifyUserAccountName?: string;
  organizationId?: string;
  owner?: string;
  ownerAccountName?: string;
  workspaceDesc?: string;
  workspaceId?: string;
  workspaceName?: string;
}

export type Body = UserIdListEvent;

/**
 * OK
 */
export type Response = UserDeleteCheckModel[];

const path = '/api/v2/organizationUser/checkDelete';
const method = 'post';
