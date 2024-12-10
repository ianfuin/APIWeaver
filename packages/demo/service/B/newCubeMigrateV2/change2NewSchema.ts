export interface Query {
  /**
   * orgId
   */
  orgId: string;
}

/**
 * OK
 */
export type Response = string;

const path = '/api/v2/cube/x/migrate/change2NewSchema';
const method = 'get';
