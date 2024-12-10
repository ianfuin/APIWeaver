export interface RoleBatchOperatorEvent {
  newRoleId?: number;
  roleId?: number;
  userList?: string[];
}
export interface RoleBatchOperatorResult {
  failList?: BatchOperateFailDetail[];
  successCnt?: number;
  successList?: string[];
}
export interface BatchOperateFailDetail {
  workspaceId?: string;
  workspaceName?: string;
}

export type Body = RoleBatchOperatorEvent;

/**
 * OK
 */
export type Response = RoleBatchOperatorResult;

const path = '/api/v2/customRole/bind';
const method = 'post';
