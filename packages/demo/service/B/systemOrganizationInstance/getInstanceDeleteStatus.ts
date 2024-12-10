export interface Query {
  /**
   * organizationId
   */
  organizationId: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/system/instance/delete/status';
const method = 'get';
