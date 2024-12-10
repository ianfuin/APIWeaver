export interface OrgConfigResultModel {
  accessConfig?: AccessConfigModel;
  accessPortalConfigModel?: AccessPortalConfigModel;
  cooperativeConfig?: CooperativeConfigModel;
  cubeAuthConfigModel?: CubeAuthConfigModel;
  dataSourceAuthConfigModel?: DataSourceAuthConfigModel;
  defaultAuthDuration?: DefaultAuthDuration;
  defaultWsConfig?: DefaultWsConfigModel;
  exportConfig?: ExportConfigModel;
  organizationConfig?: OrganizationConfigDTO;
}
export interface AccessConfigModel {
  accessInnerChannelSwitch?: boolean;
  allowApplySwitch?: boolean;
  customAccessChannelId?: string;
  customAccessChannelSwitch?: boolean;
  dataLevelAllowApply?: boolean;
  defaultApprover?: string;
  dingtalkOaAccessSwitch?: boolean;
  feishuOaAccessSwitch?: boolean;
  treeAllowApply?: boolean;
  weixinOaAccessSwitch?: boolean;
}
export interface AccessPortalConfigModel {
  pcPortalJsonString?: string;
}
export interface CooperativeConfigModel {
  allowAuthorize?: boolean;
  allowPublish?: boolean;
}
export interface CubeAuthConfigModel {
  allowAuthorize?: boolean;
  allowRowAndLevelAuth?: boolean;
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
export interface OrganizationConfigDTO {
  approveMainSwitch?: boolean;
  centralizedAuthControl?: boolean;
  defaultAuthDuration?: DefaultAuthDuration;
  defaultAutoLinkage?: boolean;
  defaultFontFamily?: string;
  filterNullOfQueryController?: boolean;
  nullPlaceholder?: string;
  pcPortalModel?: string;
  saveValueOfQueryController?: boolean;
  showDashboardComment?: boolean;
  showIndicatorMonitor?: boolean;
  showJumpEditPage?: boolean;
  showLinkagePanel?: boolean;
  showSubscription?: boolean;
  supportAliPuHuiTi?: boolean;
  supportViewShare?: boolean;
  thirdApproveUrl?: string;
}
export interface Query {
  /**
   * getPortConfig
   */
  getPortConfig?: boolean;
}

/**
 * OK
 */
export type Response = OrgConfigResultModel;

const path = '/api/v2/organization/config';
const method = 'get';
