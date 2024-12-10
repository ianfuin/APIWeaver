export interface Query {
  /**
   * dsType
   */
  dsType: string;
  /**
   * dsId
   */
  dsId: string;
}

/**
 * OK
 */
export type Response = object;

const path = '/api/v2/dataset/function/list';
const method = 'get';
