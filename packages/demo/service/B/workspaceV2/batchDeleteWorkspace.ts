export interface WorkspaceBatchOperateEvent {
  operator?: string;
  userId?: string;
  workspaceList?: string[];
}
export interface WorkspaceBatchOperateResult {
  failList?: BatchOperateFailDetail[];
  successCnt?: number;
  successList?: string[];
}
export interface BatchOperateFailDetail {
  workspaceId?: string;
  workspaceName?: string;
}

export type Body = WorkspaceBatchOperateEvent;

/**
 * OK
 */
export type Response = WorkspaceBatchOperateResult;

const path = '/api/v2/ws/batchDelete';
const method = 'post';
