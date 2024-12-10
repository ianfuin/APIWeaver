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
  type?: number;
  /**
   * date
   */
  date?: string;
  /**
   * rangDay
   */
  rangDay?: number;
  /**
   * limit
   */
  limit?: number;
}

/**
 * OK
 */
export type Response = StatisticsTopNVo[];

const path = '/api/v2/developerApi/public/rankingList';
const method = 'get';
