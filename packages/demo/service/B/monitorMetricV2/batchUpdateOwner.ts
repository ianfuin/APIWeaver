export interface MonitorTransferUserEventModel {
  metricIds?: string[];
  ownerId?: string;
}

export type Body = MonitorTransferUserEventModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/monitor/metric/batchUpdateOwner';
const method = 'put';
