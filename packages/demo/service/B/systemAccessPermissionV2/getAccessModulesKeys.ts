export interface AccessModuleKeys {
  keys?: string[];
}
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

export type Body = AccessModuleKeys;

/**
 * OK
 */
export type Response = AccessPermissionModel[];

const path = '/api/v2/access/modules/keys';
const method = 'post';
