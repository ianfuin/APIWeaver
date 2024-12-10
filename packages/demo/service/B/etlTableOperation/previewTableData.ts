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
export interface EtlPreviewTableDataResultModel {
  debugInfo?: DebugInfo;
  headers?: EtlTableDataHeaderModel[];
  rows?: object[];
}
export interface DebugInfo {
  connectDBDuration?: number;
  createTime?: number;
  cubeId?: string;
  extraInfo?: object;
  logView?: string;
  pollKey?: string;
  queryDuration?: number;
  queryEndTime?: number;
  queryId?: string;
  queryStartTime?: number;
  sql?: string;
}
export interface EtlTableDataHeaderModel {
  columnType?: string;
  dataIndex?: string;
  type?: string;
  value?: string;
}

export type Body = ETL;

/**
 * OK
 */
export type Response = EtlPreviewTableDataResultModel;

const path = '/api/v2/etl/table/previewTableData';
const method = 'post';
