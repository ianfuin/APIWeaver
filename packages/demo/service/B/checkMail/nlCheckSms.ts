export interface ResultModelObject {
  code?: string;
  data?: object;
  exStack?: string;
  message?: string;
  queryErrMsg?: string;
  querySql?: string;
  success?: boolean;
  traceId?: string;
}

/**
 * OK
 */
export type Response = ResultModelObject;

const path = '/api/v2/sms/nl/checkSms';
const method = 'get';
