export interface ModuleAccessInsertModel {
  description?: string;
  functionKey?: string;
  instanceVersionList?: number[];
  open?: number;
  workspaceType?: number;
}

export type Body = ModuleAccessInsertModel[];

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/system/devops/insertModuleAccess';
const method = 'post';
