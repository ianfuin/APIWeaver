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
   * realName
   */
  realName: string;
  /**
   * mobile
   */
  mobile: string;
  /**
   * code
   */
  code: string;
}

/**
 * OK
 */
export type Response = ResultModelObject;

const path = '/api/v2/template/nl/contactUs';
const method = 'post';
