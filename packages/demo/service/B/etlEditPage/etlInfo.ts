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
export interface EtlComponentModel {
  componentContent?: string;
  componentId?: string;
  componentName?: string;
  componentType?: number;
  etlId?: string;
  extraInfo?: string;
  operatorHistory?: string;
}
export interface ScheduleConfigModel {
  cronExpression?: string;
  triggerType?: number;
}
export interface Query {
  /**
   * workspaceId
   */
  workspaceId: string;
}

export interface Path {
  /**
   * etlId
   */
  etlId: string;
}

/**
 * OK
 */
export type Response = EtlConfigModel;

const path = '/api/v2/etl/{etlId}';
const method = 'get';
