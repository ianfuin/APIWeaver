export interface ManualExecModel {
  etlId?: string;
  param?: object;
  wsId?: string;
}

export type Body = ManualExecModel;

/**
 * OK
 */
export type Response = string;

const path = '/api/v2/etl/scheduler/manual/start';
const method = 'post';
