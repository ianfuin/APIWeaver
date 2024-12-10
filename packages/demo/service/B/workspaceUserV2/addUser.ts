export interface WorkspaceUserEvent {
  accountName?: string;
  newOwnerId?: string;
  roleIds?: string;
  useWsOwner?: boolean;
  userId?: string;
  userIds?: string[];
  workspaceId?: string;
}
export interface UserAddResult {
  failure?: number;
  failureDetail?: object;
  success?: number;
  total?: number;
}

export type Body = WorkspaceUserEvent;

/**
 * OK
 */
export type Response = UserAddResult;

const path = '/api/v2/workspaceUser';
const method = 'post';
