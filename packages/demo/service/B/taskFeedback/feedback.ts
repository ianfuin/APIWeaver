export interface TaskFeedbackModel {
  createTime?: string;
  errMsg?: string;
  forwardIp?: string;
  forwardPort?: string;
  needForward?: boolean;
  reply?: string;
  source?: string;
  status?: number;
  taskHistoryId?: number;
  taskId?: number;
}
export interface GeneralModelBoolean {
  requestId?: string;
  returnCode?: string;
  returnErrorOper?: string;
  returnErrorSolution?: string;
  returnMessage?: string;
  returnValue?: boolean;
}

export type Body = TaskFeedbackModel;

/**
 * OK
 */
export type Response = GeneralModelBoolean;

const path = '/task/{taskId}';
const method = 'put';
