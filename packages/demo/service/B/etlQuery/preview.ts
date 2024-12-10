export interface EtlQueryModel {
  componentId?: string;
  etlConfig?: EtlConfigModel;
  triggerUser?: string;
}
export interface EtlPreviewTableDataResultModel {
  debugInfo?: DebugInfo;
  headers?: EtlTableDataHeaderModel[];
  rows?: object[];
}
export interface EtlConfigModel {
  authorizedEditType?: number;
  components?: EtlComponentModel[];
  description?: string;
  edges?: string;
  etlId?: string;
  gmtCreate?: string;
  gmtModified?: string;
  groupId?: string;
  id?: number;
  modifierId?: string;
  ownerId?: string;
  paramConfig?: string;
  pid?: string;
  preCheck?: boolean;
  publishStatus?: number;
  scheduleConfig?: ScheduleConfigModel;
  showName?: string;
  tenantId?: string;
  type?: number;
  version?: number;
}
export interface DebugInfo {
  connectDBDuration?: number;
  createTime?: number;
  cubeId?: string;
  extraInfo?: object;
  logView?: string;
  pollKey?: string;
  queryDuration?: number;
  queryEndTime?: number;
  queryId?: string;
  queryStartTime?: number;
  sql?: string;
}
export interface EtlTableDataHeaderModel {
  columnType?: string;
  dataIndex?: string;
  type?: string;
  value?: string;
}

export type Body = EtlQueryModel;

/**
 * OK
 */
export type Response = EtlPreviewTableDataResultModel;

const path = '/api/v2/etl/query/preview';
const method = 'post';
