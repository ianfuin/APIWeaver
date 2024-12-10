export interface PaginatedValMetricSummaryVO {
  data?: MetricSummaryVO[];
  next?: number;
  orderBy?: OrderBy[];
  orderString?: string;
  pageNum?: number;
  pageSize?: number;
  pre?: number;
  start?: number;
  totalNum?: number;
  totalPages?: number;
}
export interface MetricSummaryVO {
  dimValue?: string;
  realPoint?: MetricPointVO;
  ringRatio?: string;
  rowKey?: string;
}
export interface OrderBy {
  order?: string;
  orderBy?: string;
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
   * rowKeys
   */
  rowKeys?: string;
  /**
   * 是否异常
   */
  onlyAbnormal?: boolean;
  /**
   * pageNum
   */
  pageNum?: number;
  /**
   * pageSize
   */
  pageSize?: number;
}

/**
 * OK
 */
export type Response = PaginatedValMetricSummaryVO;

const path = '/api/v2/monitor/metric/listMonitorMetricSummary';
const method = 'get';
