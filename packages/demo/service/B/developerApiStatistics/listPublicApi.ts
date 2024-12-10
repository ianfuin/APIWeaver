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

/**
 * OK
 */
export type Response = ApiListVo[];

const path = '/api/v2/developerApi/listPublicApi';
const method = 'get';
