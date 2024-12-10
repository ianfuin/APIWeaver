export interface KeyValueStringString {
  key?: string;
  value?: string;
}
export interface Query {
  /**
   * dsId
   */
  dsId: string;
  /**
   * tableName
   */
  tableName: string;
}

/**
 * OK
 */
export type Response = KeyValueStringString[];

const path = '/api/v2/dataset/getFDDimTableCol';
const method = 'get';
