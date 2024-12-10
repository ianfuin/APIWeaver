export type HttpSession = any;
export interface Query {
  /**
   * redirectUrl
   */
  redirectUrl: string;
  /**
   * type
   */
  type: string;
}

export type Body = HttpSession;

const path = '/qc/openapi/login/logout';
const method = 'get';
