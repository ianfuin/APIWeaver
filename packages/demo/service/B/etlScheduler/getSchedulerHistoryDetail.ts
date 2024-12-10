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
   * historyId
   */
  historyId: number;
}

/**
 * OK
 */
export type Response = SchedulerHistoryModel;

const path = '/api/v2/etl/scheduler/history/detail';
const method = 'get';
