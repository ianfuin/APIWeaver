export interface PageModelSchedulerHistoryModel {
  data?: SchedulerHistoryModel[];
  pageNum?: number;
  pageSize?: number;
  totalNum?: number;
  totalPages?: number;
}
export interface SchedulerHistoryModel {
  applicationId?: string;
  bizDate?: string;
  content?: string;
  costTime?: number;
  createTime?: string;
  dueTime?: string;
  etlId?: string;
  etlName?: string;
  execParams?: object;
  finishExecuteTime?: string;
  id?: number;
  lastTaskRunId?: string;
  logs?: string;
  schedulerStatus?: number;
  sparkDiagnotics?: string;
  startExecuteTime?: string;
  taskId?: string;
  triggerType?: number;
  triggerUser?: string;
  tryKill?: number;
}
export interface Query {
  /**
   * wsId
   */
  wsId: string;
  /**
   * etlId
   */
  etlId: string;
  /**
   * beginDate
   */
  beginDate?: number;
  /**
   * endDate
   */
  endDate?: number;
  /**
   * scheduleStatus
   */
  scheduleStatus?: number;
  /**
   * pageNum
   */
  pageNum?: number;
  /**
   * pageSize
   */
  pageSize?: number;
  /**
   * orderBy
   */
  orderBy?: string;
  /**
   * order
   */
  order?: string;
}

/**
 * OK
 */
export type Response = PageModelSchedulerHistoryModel;

const path = '/api/v2/etl/scheduler/histories';
const method = 'get';
