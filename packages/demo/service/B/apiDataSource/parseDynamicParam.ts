export interface ApiDatasourceDynamicParamParseVO {
  /**
   * 是否解析成功，true-弹出解析成功的提示，false-不谈出解析成功提示
   */
  parseSuccess?: boolean;
  /**
   * 解析后的值
   */
  value?: string;
}
export interface Query {
  /**
   * expr
   */
  expr: string;
}

/**
 * OK
 */
export type Response = ApiDatasourceDynamicParamParseVO;

const path = '/api/v2/apiDataSource/table/parseDynamicParam';
const method = 'get';
