export interface ETL {
  componentId?: string;
  /**
   * 预览数据的条数, 默认100条
   */
  dataLimit?: number;
  /**
   * 数据源id
   */
  dsId?: string;
  /**
   * 过滤条件,如: city = "杭州" and pt = ${yyyymmdd}
   */
  filter?: string;
  /**
   * 全局参数配置
   */
  paramConfig?: object;
  /**
   * 需要预览的字段名, 不传预览全部字段(最多500个字段)
   */
  previewColumnNames?: string[];
  /**
   * 表名
   */
  tableName?: string;
}
export interface EtlInputComponentValidateResultModel {
  componentId?: string;
  message?: string;
  result?: boolean;
  sql?: string;
}

export type Body = ETL;

/**
 * OK
 */
export type Response = EtlInputComponentValidateResultModel;

const path = '/api/v2/etl/table/validateFilterCondition';
const method = 'post';
