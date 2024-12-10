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
   * keyWord
   */
  keyWord: string;
}

/**
 * OK
 */
export type Response = KeyValueStringString[];

const path = '/api/v2/dataset/searchFDDimTable';
const method = 'get';
