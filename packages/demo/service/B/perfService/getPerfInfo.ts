export interface PerfInfoModel {
  data?: string;
  ip?: string;
  timestamp?: string;
  type?: number;
  ua?: string;
  url?: string;
  userId?: string;
}

/**
 * OK
 */
export type Response = PerfInfoModel[];

const path = '/api/v2/perf/list';
const method = 'get';
