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

export type Body = ModuleAccessPermissionVO;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/system/devops/modifyModuleAccess';
const method = 'post';
