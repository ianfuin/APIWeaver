export interface DataFormModel {
  aimDirId?: string;
  auth3rdFlag?: number;
  authLevel?: number;
  branchVersion?: string;
  components?: DataFormComponentModel[];
  creator?: string;
  description?: string;
  formBaseConfig?: string;
  formId?: string;
  formLayoutConfig?: string;
  formName?: string;
  formNameEn?: string;
  gmtCreate?: string;
  gmtModified?: string;
  modifyUser?: string;
  name?: string;
  objectId?: string;
  objectType?: string;
  openApproveDataInTable?: number;
  openWriteNickname?: number;
  originDashboardId?: string;
  owner?: string;
  ownerName?: string;
  pId?: string;
  permissionList?: string[];
  publishStatus?: number;
  ruleId?: string;
  shareToWorkspace?: number;
  subType?: number;
  treeId?: string;
  type?: string;
  version?: string;
  workspaceId?: string;
  wsId?: string;
}
export interface DataFormComponentModel {
  columnPath?: string;
  componentConfig?: string;
  componentId?: string;
  componentNameEn?: string;
  componentOrder?: number;
  componentType?: string;
  defaultValue?: string;
  delete?: boolean;
  formId?: string;
  label?: string;
  props?: string;
  ruleId?: string;
}

export interface Path {
  /**
   * formId
   */
  formId: string;
}
export type Body = DataFormModel;

/**
 * OK
 */
export type Response = string;

const path = '/api/v2/dataForm/{formId}/copy';
const method = 'post';
