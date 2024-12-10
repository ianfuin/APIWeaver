export interface Query {
  /**
   * resourceName
   */
  resourceName: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/workspublish/export/validate';
const method = 'get';
