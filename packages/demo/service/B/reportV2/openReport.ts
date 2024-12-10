export interface ReportBO {
  auth3rdFlag?: number;
  authLevel?: number;
  branchVersion?: string;
  cubeBlends?: string;
  cubeShadows?: string;
  description?: string;
  globalCascadeModel?: string;
  globalParam?: GlobalParamBO[];
  gmtCreate?: string;
  gmtModified?: string;
  modifyUser?: string;
  name?: string;
  originDashboardId?: string;
  originReportId?: string;
  owner?: string;
  ownerName?: string;
  pId?: string;
  permissionList?: string[];
  publishStatus?: number;
  queryConditionConfig?: string;
  queryEnumList?: QueryEnumBO[];
  quickReportVersion?: string;
  reportSetting?: string;
  shareToWorkspace?: number;
  sheetComponents?: ExcelComponentEncodedBO[];
  sheetList?: ReportSheetBO[];
  subType?: number;
  treeId?: string;
  type?: string;
  useLoginUserAsModifyUser?: boolean;
  version?: string;
  workBookContent?: string;
  workspaceId?: string;
  wsId?: string;
}
export interface GlobalParamBO {
  config?: string;
  createUser?: string;
  dashboardId?: string;
  gmtCreate?: string;
  id?: number;
  paramContent?: string;
  paramKey?: string;
}
export interface QueryEnumBO {
  componentId?: string;
  fieldEnumList?: QueryFieldEnumBO[];
}
export interface ExcelComponentEncodedBO {
  componentId?: string;
  componentType?: number;
  content?: string;
  dataFromId?: string;
  formBackEndConfig?: string;
  sheetId?: string;
}
export interface ReportSheetBO {
  queryConditionConfig?: string;
  reportId?: string;
  reportSheetQuerys?: ReportSheetQueryDO[];
  sheetContent?: string;
  sheetId?: string;
  sheetName?: string;
  sheetOrder?: number;
}
export interface Query {
  /**
   * menuId
   */
  menuId?: string;
  /**
   * viewType
   */
  viewType?: string;
}

export interface Path {
  /**
   * 报表id
   */
  reportId: string;
}

/**
 * OK
 */
export type Response = ReportBO;

const path = '/api/v2/report/{reportId}';
const method = 'get';
