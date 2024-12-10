export interface Query {
  /**
   * taskToken
   */
  taskToken?: string;
  /**
   * orgId
   */
  orgId?: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/access/module/cache';
const method = 'get';
