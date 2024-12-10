export interface StatisticsTopNVo {
  apiCode?: number;
  apiId?: number;
  apiName?: string;
  apiNameCN?: string;
  apiUri?: string;
  crudType?: number;
  gmtOpen?: number;
  httpType?: string;
  independentDocumentUrl?: string;
  open?: boolean;
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
export type Response = StatisticsTopNVo[];

const path = '/api/v2/developerApi/topN';
const method = 'get';
: number;
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
export type Response = PaginatedValStatisticsInDateDetailInfoVo;

const path = '/api/v2/developerApi/detail';
const method = 'get';
