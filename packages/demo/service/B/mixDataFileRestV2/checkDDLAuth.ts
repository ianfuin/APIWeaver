export interface Query {
  /**
   * dsId
   */
  dsId: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/mix/datafile/checkDDLAuth';
const method = 'get';
