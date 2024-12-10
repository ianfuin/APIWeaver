export interface Query {
  /**
   * workspaceId
   */
  workspaceId: string;
  /**
   * etlId
   */
  etlId: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/etl/offline';
const method = 'put';
