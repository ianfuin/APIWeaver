export interface Query {
  /**
   * code
   */
  code?: string;
  /**
   * error
   */
  error?: string;
  /**
   * state
   */
  state: string;
}

const path = '/restapi/ramLogin/v1/authCallBack';
const method = 'get';
