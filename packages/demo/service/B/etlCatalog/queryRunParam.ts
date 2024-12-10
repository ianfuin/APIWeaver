export interface Query {
  /**
   * wsId
   */
  wsId: string;
  /**
   * etlId
   */
  etlId: string;
}

/**
 * OK
 */
export type Response = object;

const path = '/api/v2/etl/runParam';
const method = 'get';
