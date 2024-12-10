export interface MonitorDetailVO {
  abnormal?: boolean;
  abnormalRowCnt?: number;
  abnormalType?: number;
  alarmRules?: AlarmRuleTree;
  componentId?: string;
  cronExpression?: string;
  cubeId?: string;
  cubeName?: string;
  dimensionNames?: string[];
  filters?: MonitorFilterModel;
  gmtCreate?: number;
  gmtModified?: number;
  lastBizDate?: number;
  lastUpdateTime?: number;
  measureNames?: string[];
  measures?: MetricProperty[];
  metricId?: string;
  metricName?: string;
  metricReport?: MetricReportVO;
  metricSummary?: MetricSummaryVO[];
  metricTrend?: MetricTrendVO[];
  monitorPeriod?: string;
  receiverSummary?: string;
  receiverType?: number[];
  sqlText?: string;
  switchInfo?: MonitorSwitchVO;
  totalAlarmCnt?: number;
  userInfo?: MonitorUserInfoVO;
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
export interface MonitorFilterModel {
  conditionNode?: MonitorFilterCondition;
  logicalOperator?: string;
  trees?: MonitorFilterModel[];
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
export interface MetricReportVO {
  insightResult?: InsightResult;
  interpretation?: string;
  tips?: string;
}
export interface MetricSummaryVO {
  dimValue?: string;
  realPoint?: MetricPointVO;
  ringRatio?: string;
  rowKey?: string;
}
export interface MetricTrendVO {
  comparePoints?: MetricPointVO[];
  dimValue?: string;
  realPoints?: MetricPointVO[];
  rowKey?: string;
}
export interface MonitorSwitchVO {
  allowDelete?: boolean;
  allowEdit?: boolean;
  allowTransfer?: boolean;
  followed?: boolean;
  msgSwitch?: boolean;
  noAuth?: boolean;
}
export interface MonitorUserInfoVO {
  creator?: string;
  editor?: string;
}
export interface Query {
  /**
   * metricId
   */
  metricId: string;
  /**
   * 检测时间
   */
  bizDate?: number;
}

/**
 * OK
 */
export type Response = MonitorDetailVO;

const path = '/api/v2/monitor/metric/getMonitorDetail';
const method = 'get';
