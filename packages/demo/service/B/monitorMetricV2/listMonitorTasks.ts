export interface MonitorTaskHistoryVO {
  last30DaysAlarmCnt?: number;
  tasks?: PaginatedValMonitorTaskVO;
  totalAlarmCnt?: number;
}
export interface PaginatedValMonitorTaskVO {
  data?: MonitorTaskVO[];
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
export interface Query {
  /**
   * metricId
   */
  metricId: string;
  /**
   * pageNum
   */
  pageNum?: number;
  /**
   * pageSize
   */
  pageSize?: number;
  /**
   * onlyAbnormal
   */
  onlyAbnormal?: boolean;
}

/**
 * OK
 */
export type Response = MonitorTaskHistoryVO;

const path = '/api/v2/monitor/metric/listMonitorTasks';
const method = 'get';
