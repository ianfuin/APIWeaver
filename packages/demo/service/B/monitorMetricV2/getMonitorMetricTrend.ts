export interface MetricTrendVO {
  comparePoints?: MetricPointVO[];
  dimValue?: string;
  realPoints?: MetricPointVO[];
  rowKey?: string;
}
export interface MetricPointVO {
  abnormal?: boolean;
  bizDate?: number;
  lower?: string;
  upper?: string;
  value?: string;
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
  /**
   * 维度key
   */
  rowKey?: string;
  /**
   * limit
   */
  limit?: number;
}

/**
 * OK
 */
export type Response = MetricTrendVO;

const path = '/api/v2/monitor/metric/getMonitorMetricTrend';
const method = 'get';
