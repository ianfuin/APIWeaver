export interface Query {
  /**
   * orgId
   */
  orgId: string;
  /**
   * workspaceId
   */
  workspaceId?: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/blood/init/initBlood4Org';
const method = 'get';
