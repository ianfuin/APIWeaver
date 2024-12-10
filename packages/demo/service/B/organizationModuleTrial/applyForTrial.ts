export interface Query {
  /**
   * module
   */
  module: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/trial/module/apply';
const method = 'get';
