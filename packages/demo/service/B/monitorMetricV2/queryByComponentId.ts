export interface Path {
  /**
   * componentId
   */
  componentId: string;
}

/**
 * OK
 */
export type Response = string[];

const path = '/api/v2/monitor/metric/queryConfig/{componentId}/v3';
const method = 'get';
