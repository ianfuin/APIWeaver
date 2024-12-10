export interface Query {
  /**
   * version
   */
  version?: number;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/restapi/trial/free';
const method = 'get';
