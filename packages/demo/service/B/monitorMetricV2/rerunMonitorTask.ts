export interface MonitorTaskRerunParam {
  bizDate?: string;
  endTime?: string;
  monitorIds?: string[];
  organizationIds?: string[];
  skipExistTask?: boolean;
  skipHourTask?: boolean;
  skipSuccessTask?: boolean;
  startTime?: string;
}

export type Body = MonitorTaskRerunParam;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/monitor/metric/rerunMonitorTask';
const method = 'post';
