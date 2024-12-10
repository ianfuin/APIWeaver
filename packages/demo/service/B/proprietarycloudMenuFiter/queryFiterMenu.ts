export interface Query {
  /**
   * groupId
   */
  groupId: string;
  /**
   * version
   */
  version: string;
}

/**
 * OK
 */
export type Response = object;

const path = '/restapi/functioncut/cut';
const method = 'get';
