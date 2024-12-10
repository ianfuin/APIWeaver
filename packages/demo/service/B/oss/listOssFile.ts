export interface Query {
  /**
   * dsId
   */
  dsId: string;
  /**
   * key
   */
  key: string;
}

/**
 * OK
 */
export type Response = object;

const path = '/restapi/oss/list';
const method = 'get';
