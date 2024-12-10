export interface Query {
  /**
   * orgId
   */
  orgId: string;
  /**
   * workspaceId
   */
  workspaceId?: string;
  /**
   * resourceType
   */
  resourceType: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/blood/init/initBloodByResourceType';
const method = 'get';
