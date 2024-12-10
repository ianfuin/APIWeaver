export interface Query {
  /**
   * code
   */
  code: string;
  /**
   * state
   */
  state: string;
}

const path = '/oauth/v1/authCallBack';
const method = 'get';
