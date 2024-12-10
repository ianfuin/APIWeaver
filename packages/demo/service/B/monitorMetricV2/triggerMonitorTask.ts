export interface Query {
  /**
   * metricId
   */
  metricId: string;
  /**
   * dryrun
   */
  dryrun?: boolean;
  /**
   * bizDate
   */
  bizDate?: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/monitor/metric/executeMonitorTask';
const method = 'get';
