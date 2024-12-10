export interface ApiListVo {
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
}
export interface Query {
  /**
   * keyword
   */
  keyword?: string;
}

/**
 * OK
 */
export type Response = ApiListVo[];

const path = '/api/v2/developerApi/list';
const method = 'get';
