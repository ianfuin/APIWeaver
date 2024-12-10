export interface WorkspaceUserBatchDeleteEvent {
  newOwnerId?: string;
  userIds?: string[];
  workspaceId?: string;
}
export interface UserAddResult {
  failure?: number;
  failureDetail?: object;
  success?: number;
  total?: number;
}

export type Body = WorkspaceUserBatchDeleteEvent;

/**
 * OK
 */
export type Response = UserAddResult;

const path = '/api/v2/workspaceUser/batchDelete';
const method = 'post';
