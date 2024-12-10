export interface Query {
  /**
   * etlId
   */
  etlId: string;
  /**
   * beginDate
   */
  beginDate?: number;
  /**
   * endDate
   */
  endDate?: number;
}

/**
 * OK
 */
export type Response = object;

const path = '/api/v2/etl/scheduler/status/count';
const method = 'get';
