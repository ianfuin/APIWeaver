export interface Query {
  /**
   * orgId
   */
  orgId?: string;
  /**
   * uid
   */
  uid?: string;
}

/**
 * OK
 */
export type Response = object;

const path = '/restapi/account/reduce';
const method = 'get';
