export interface LogCollectionEvent {
  keys?: string;
  noKeys?: string;
  timestamp?: number;
  traceId?: string;
  type?: string;
  userId?: string;
}
export interface LogCollectionResult {
  logList?: string[];
  message?: string;
  success?: boolean;
}

export type Body = LogCollectionEvent;

/**
 * OK
 */
export type Response = LogCollectionResult;

const path = '/api/v2/system/logCollect';
const method = 'post';
