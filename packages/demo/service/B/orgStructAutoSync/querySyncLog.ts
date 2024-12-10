export interface AutoSyncLogQueryReqModel {
  beginTime?: string;
  endTime?: string;
  mobileType?: string;
  pageIndex?: number;
  pageSize?: number;
  state?: number;
}
export interface OrgStructSyncLogPageModelOrgStructSyncLogModel {
  data?: OrgStructSyncLogModel[];
  next?: number;
  orderBy?: OrderBy[];
  pageNum?: number;
  pageSize?: number;
  pre?: number;
  start?: number;
  totalDoingCount?: number;
  totalFailedCount?: number;
  totalNum?: number;
  totalPages?: number;
  totalSuccessCount?: number;
}
export interface OrgStructSyncLogModel {
  errorStack?: string;
  execTime?: string;
  submitTime?: string;
  syncInfo?: string;
  syncStatus?: number;
  syncTaskId?: string;
  timeCost?: number;
  triggerType?: number;
}
export interface OrderBy {
  order?: string;
  orderBy?: string;
}

export type Body = AutoSyncLogQueryReqModel;

/**
 * OK
 */
export type Response = OrgStructSyncLogPageModelOrgStructSyncLogModel;

const path = '/api/v2/orgStructAutoSync/queryLog';
const method = 'post';
