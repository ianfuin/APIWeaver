export interface ModuleAccessPermissionVO {
  description?: string;
  environment?: string;
  functionKey?: string;
  gmtCreate?: string;
  gmtModified?: string;
  open?: number;
  version?: number;
  workspaceType?: number;
}
export interface Query {
  /**
   * functionKey
   */
  functionKey?: string;
}

/**
 * OK
 */
export type Response = ModuleAccessPermissionVO[];

const path = '/api/v2/system/devops/moduleAccess';
const method = 'get';
