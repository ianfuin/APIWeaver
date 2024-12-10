export interface Query {
  /**
   * name
   */
  name: string;
}

/**
 * OK
 */
export type Response = number;

const path = '/api/v2/dataservice/checkRepeat';
const method = 'get';
