export interface Query {
  /**
   * configId
   */
  configId: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/dynamicTag/config/cache';
const method = 'delete';
