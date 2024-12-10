export interface LogCollectionAllResult {
  count?: number;
  logList?: string[];
  successCount?: number;
}

/**
 * OK
 */
export type Response = LogCollectionAllResult;

const path = '/api/v2/system/logCollectAll';
const method = 'post';
