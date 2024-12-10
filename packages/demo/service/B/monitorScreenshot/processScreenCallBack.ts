export type MultipartHttpServletRequest = any;
export interface GeneralModelBoolean {
  requestId?: string;
  returnCode?: string;
  returnErrorOper?: string;
  returnErrorSolution?: string;
  returnMessage?: string;
  returnValue?: boolean;
}
export interface Query {
  /**
   * token
   */
  token: string;
  /**
   * imageUrl
   */
  imageUrl?: string;
}
export interface Header {
  /**
   * x-screenshot-taskId
   */
  'x-screenshot-taskId': string;
}

export type Body = MultipartHttpServletRequest;

/**
 * OK
 */
export type Response = GeneralModelBoolean;

const path = '/rawapi/v2/monitor/screenshot/callback';
const method = 'post';
