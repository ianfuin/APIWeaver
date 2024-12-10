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
   * schedulerHistoryId
   */
  schedulerHistoryId: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/etl/scheduler/manual/kill';
const method = 'post';
