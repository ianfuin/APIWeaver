export interface UserRoleBatchEvent {
  roleList?: number[];
  userIds?: string[];
  workspaceId?: string;
}
export interface UserAddResult {
  failure?: number;
  failureDetail?: object;
  success?: number;
  total?: number;
}

export type Body = UserRoleBatchEvent;

/**
 * OK
 */
export type Response = UserAddResult;

const path = '/api/v2/workspaceUser/batchModifyRole';
const method = 'post';
