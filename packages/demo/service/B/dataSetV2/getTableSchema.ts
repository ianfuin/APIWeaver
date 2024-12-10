export interface TableSchema {
  datasourceId?: string;
  fieldTree?: string[];
  fields?: TableField[];
  sql?: string;
  sqlId?: string;
  tableName?: string;
  tableType?: string;
}
export interface TableField {
  columnAlias?: string;
  columnExpr?: string;
  columnType?: string;
}
export interface Query {
  /**
   * datasourceId
   */
  datasourceId: string;
  /**
   * tableName
   */
  tableName: string;
  /**
   * cubeId
   */
  cubeId?: string;
}

/**
 * OK
 */
export type Response = TableSchema;

const path = '/api/v2/dataset/getTableSchema';
const method = 'get';
