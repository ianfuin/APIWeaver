export interface EtlQueryModel {
  componentId?: string;
  etlConfig?: EtlConfigModel;
  triggerUser?: string;
}
export interface DataExploreResultModel {
  detailRows?: object;
  headers?: DataHeader[];
  overviewRows?: object;
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
export interface DataHeader {
  columnType?: string;
  dataIndex?: string;
  value?: string;
}

export type Body = EtlQueryModel;

/**
 * OK
 */
export type Response = DataExploreResultModel;

const path = '/api/v2/etl/query/dataExplore';
const method = 'post';
