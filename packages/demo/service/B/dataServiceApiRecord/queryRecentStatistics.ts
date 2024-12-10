export interface ApiRecordStatisticDTO {
  avgRt?: number;
  callCount?: number;
  failCount?: number;
  failRatio?: number;
  logTime?: string;
  successCount?: number;
  successRatio?: number;
}
export interface Query {
  /**
   * sid
   */
  sid?: string;
}

/**
 * OK
 */
export type Response = ApiRecordStatisticDTO[];

const path = '/api/v2/dataservice/record/recent';
const method = 'get';
