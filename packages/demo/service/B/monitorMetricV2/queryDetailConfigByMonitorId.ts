export interface MonitorIndicatorModel {
  alarmRules?: AlarmRuleTree;
  alarmStrategy?: AlarmStrategyModel;
  componentConfig?: string;
  componentId?: string;
  creatorName?: string;
  cubeId?: string;
  cubeShadow?: CubeSchemaModel;
  dimensions?: DimensionConfig[];
  draftState?: boolean;
  filters?: MonitorFilterModel;
  gmtCreate?: number;
  gmtModify?: number;
  insightConfig?: InsightConfig;
  lastStatus?: number;
  measures?: MetricProperty[];
  metricId?: string;
  metricName?: string;
  modifierName?: string;
  monitorPeriod?: MonitorCycle;
  olapQueryParam?: string;
  organizationId?: string;
  publishRule?: PublishRuleModel;
  smartRule?: SmartRuleModel;
  update?: boolean;
  userId?: string;
  worksId?: string;
  worksType?: string;
  workspaceId?: string;
  workspaceName?: string;
}
export interface AlarmRuleTree {
  conditionNode?: AlarmRuleFilterCondition;
  logicalOperator?: string;
  trees?: AlarmRuleTree[];
}
export interface AlarmStrategyModel {
  alarmFrequencyControl?: boolean;
  alarmGroupId?: string[];
  alarmInterval?: number;
  alarmPrecision?: number;
  alarmStatus?: boolean;
  alarmUserId?: string[];
  chatbot?: boolean;
  customChannel?: boolean;
  customChannelIdList?: string[];
  ding?: boolean;
  dingWebhook?: boolean;
  dingWebhookSecret?: string;
  dingWebhookUrl?: string;
  feishu?: boolean;
  feishuWebhook?: boolean;
  feishuWebhookUrl?: string;
  mail?: boolean;
  messageContent?: MessageContent;
  phone?: boolean;
  pushChannels?: PushChannelConfig[];
  reportLink?: string;
  sms?: boolean;
  thumbnailType?: number;
  thumbnailUrl?: string;
  useCustomReportLink?: boolean;
  version?: string;
  weixin?: boolean;
  weixinWebhook?: boolean;
  weixinWebhookUrl?: string;
  withThumbnail?: boolean;
}
export interface CubeSchemaModel {
  caption?: string;
  cubeId?: string;
  datasourceId?: string;
  fieldTree?: CubeFieldTreeNode[];
  fields?: CubeFieldModel[];
  filter?: CubeFilterModel[];
  fromPanel?: boolean;
  params?: CubeParamModel[];
  sqlPlaceholders?: SqlPlaceholderModel[];
  uniqueId?: string;
}
export interface DimensionConfig {
  caption?: string;
  colType?: string;
  columnId?: string;
  columnType?: string;
  displayType?: string;
  firstDayOfWeek?: number;
  itemType?: string;
  levelGranularity?: string;
  levels?: DimensionLevelModel[];
  name?: string;
  operator?: string;
  pathId?: string;
  relativeTime?: boolean;
  selectAll?: boolean;
  type?: string;
  useNotIn?: boolean;
  uuid?: string;
  value?: string[];
}
export interface MonitorFilterModel {
  conditionNode?: MonitorFilterCondition;
  logicalOperator?: string;
  trees?: MonitorFilterModel[];
}
export interface InsightConfig {
  attributionDims?: string[];
  compareType?: string;
  useAttributionAnalysis?: boolean;
}
export interface MetricProperty {
  aggArgs?: string[];
  aggregator?: string;
  calc?: boolean;
  caption?: string;
  colType?: string;
  columnId?: string;
  columnType?: string;
  disabled?: boolean;
  displayName?: string;
  drillEnabled?: boolean;
  itemType?: string;
  key?: string;
  mask?: boolean;
  name?: string;
  numberFormat?: string;
  pathId?: string;
  skin?: string;
  uniqPathId?: string;
  useaggregator?: string;
  uuid?: string;
}
export interface MonitorCycle {
  cronExpression?: string;
  type?: string;
}
export interface PublishRuleModel {
  allowAlarmWhenError?: boolean;
  allowEdit?: boolean;
  allowView?: boolean;
  retentionDays?: number;
}
export interface SmartRuleModel {
  enabled?: boolean;
}
export interface Query {
  /**
   * metricId
   */
  metricId: string;
}

/**
 * OK
 */
export type Response = MonitorIndicatorModel;

const path = '/api/v2/monitor/metric/queryByMetricId/v3';
const method = 'get';
