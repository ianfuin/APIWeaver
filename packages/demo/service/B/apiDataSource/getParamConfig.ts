export type MapStringString = object;
export interface Query {
  /**
   * apiId
   */
  apiId: string;
}

/**
 * OK
 */
export type Response = MapStringString[];

const path = '/api/v2/apiDataSource/table/getParamConfig';
const method = 'get';
