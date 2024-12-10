export interface Query {
  /**
   * organizationId
   */
  organizationId?: string;
}

const path = '/api/v2/monitor/metric/rollbackGrayMonitor';
const method = 'get';
