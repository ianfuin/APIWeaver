export interface OrgConfigModel {
  accessPortalConfigModel?: AccessPortalConfigModel;
  approveConfig?: ApproveConfigModel;
  authConfigModel?: AuthConfigModel;
  cooperativeConfig?: CooperativeConfigModel;
  cubeAuthConfigModel?: CubeAuthConfigModel;
  dashboardConfig?: DashboardConfigModel;
  dataSourceAuthConfigModel?: DataSourceAuthConfigModel;
  defaultAuthDuration?: DefaultAuthDuration;
  defaultWsConfig?: DefaultWsConfigModel;
  exportConfig?: ExportConfigModel;
  reportConfig?: ReportConfigModel;
}
export interface AccessPortalConfigModel {
  pcPortalJsonString?: string;
}
export interface ApproveConfigModel {
  approveMainSwitch?: boolean;
  thirdApproveUrl?: string;
}
export interface AuthConfigModel {
  centralizedAuthControl?: boolean;
}
export interface CooperativeConfigModel {
  allowAuthorize?: boolean;
  allowPublish?: boolean;
}
export interface CubeAuthConfigModel {
  allowAuthorize?: boolean;
  allowRowAndLevelAuth?: boolean;
}
export interface DashboardConfigModel {
  defaultAutoLinkage?: boolean;
  defaultFontFamily?: string;
  nullPlaceholder?: string;
  showDashboardComment?: boolean;
  showIndicatorMonitor?: boolean;
  showJumpEditPage?: boolean;
  showLinkagePanel?: boolean;
  showSubscription?: boolean;
  supportAliPuHuiTi?: boolean;
  supportViewShare?: boolean;
}
export interface DataSourceAuthConfigModel {
  allowAuthorize?: boolean;
}
export interface DefaultAuthDuration {
  custom?: boolean;
  type?: string;
  value?: number;
}
export interface DefaultWsConfigModel {
  connectionEditToWs?: number;
  connectionUseToWs?: number;
  cubeEditToWs?: number;
  cubeUseToWs?: number;
  reportEditToWs?: number;
  reportShareToWs?: number;
}
export interface ExportConfigModel {
  dataExport?: boolean;
  defaultExportType?: boolean;
  exportMainSwitch?: boolean;
  exportServerModels?: AbstractExportServerModel[];
  exportToLocal?: boolean;
  exportToServer?: boolean;
  fileNameFormat?: string;
  fileNameFormatInServer?: boolean;
  imageExport?: boolean;
  offlineDownloadConfig?: OfflineDownloadConfigModel;
  pdfExport?: boolean;
  watermarkMode?: string;
}
export interface ReportConfigModel {
  filterNullOfQueryController?: boolean;
  recordValueOfQueryController?: boolean;
}

export type Body = OrgConfigModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/organization/config/save';
const method = 'post';
