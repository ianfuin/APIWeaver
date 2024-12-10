export interface Query {
  /**
   * wsId
   */
  wsId: string;
  /**
   * etlId
   */
  etlId: string;
  /**
   * operate
   */
  operate: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/etl/scheduler/update';
const method = 'post';
