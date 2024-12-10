export interface SqlAdviseEvent {
  cacheOpen?: boolean;
  cubeId?: string;
  dlaOpen?: boolean;
  locale?: string;
  offlineOpen?: boolean;
  runtime?: number;
  sqlText?: string;
  traceId?: string;
}
export interface SqlAdviseResult {
  content?: string;
}

export type Body = SqlAdviseEvent;

/**
 * OK
 */
export type Response = SqlAdviseResult;

const path = '/api/v2/sqladvise/fetch';
const method = 'post';
