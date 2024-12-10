export interface UserIdListEvent {
  userIdList?: string[];
}
export interface UserOperateResultModel {
  failedAccountName?: string[];
  failedCount?: number;
  successCount?: number;
}

export type Body = UserIdListEvent;

/**
 * OK
 */
export type Response = UserOperateResultModel;

const path = '/api/v2/organizationUser/batchDelete';
const method = 'post';
