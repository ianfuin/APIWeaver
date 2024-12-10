export interface AccessPermissionModel {
  description?: string;
  environment?: string;
  functionKey?: string;
  open?: number;
  version?: number;
  workspaceType?: number;
}
export interface Query {
  /**
   * workspaceId
   */
  workspaceId?: string;
}

/**
 * OK
 */
export type Response = AccessPermissionModel[];

const path = '/api/v2/access/modules';
const method = 'get';
