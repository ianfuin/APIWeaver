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
export interface Query {
  /**
   * mobile
   */
  mobile: string;
}

/**
 * OK
 */
export type Response = ResultModelObject;

const path = '/api/v2/sms/nl/sendSms';
const method = 'post';
