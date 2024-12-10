export interface RemoteCallBackModel {
  callbackContext?: string;
  errorCode?: number;
  errorMsg?: string;
  subTaskType?: number;
  taskId?: number;
  taskLength?: number;
  taskStatus?: number;
  taskType?: number;
  traceId?: string;
}
export interface GeneralModelBoolean {
  requestId?: string;
  returnCode?: string;
  returnErrorOper?: string;
  returnErrorSolution?: string;
  returnMessage?: string;
  returnValue?: boolean;
}

export type Body = RemoteCallBackModel;

/**
 * OK
 */
export type Response = GeneralModelBoolean;

const path = '/executor/task/callback';
const method = 'post';
