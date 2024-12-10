export interface ApiRecordLogTopNDTO {
  name?: string;
  sid?: string;
  value?: number;
}
export interface Query {
  /**
   * type
   */
  type: number;
  /**
   * date
   */
  date?: string;
}

/**
 * OK
 */
export type Response = ApiRecordLogTopNDTO[];

const path = '/api/v2/dataservice/record/topN';
const method = 'get';
r;
  callCount?: number;
  failCount?: number;
  failRatio?: number;
  gmtCreate?: string;
  logTime?: string;
  name?: string;
  sid?: string;
  successCount?: number;
  successRatio?: number;
}
export interface OrderBy {
  order?: string;
  orderBy?: string;
}
export interface Query {
  /**
   * date
   */
  date?: string;
  /**
   * keyword
   */
  keyword?: string;
  /**
   * pageNo
   */
  pageNo?: number;
  /**
   * pageSize
   */
  pageSize?: number;
}

/**
 * OK
 */
export type Response = PaginatedValApiStatisticsDetailVO;

const path = '/api/v2/dataservice/record/detail';
const method = 'get';
