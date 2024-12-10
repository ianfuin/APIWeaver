export interface Query {
  /**
   * dsId
   */
  dsId: string;
  /**
   * forceDetect
   */
  forceDetect: boolean;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/etl/query/detect';
const method = 'post';
