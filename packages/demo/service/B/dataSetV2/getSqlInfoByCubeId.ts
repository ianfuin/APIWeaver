export interface VirtualTableSqlInfo {
  datasourceId?: string;
  fields?: TableField[];
  sql?: string;
  sqlId?: string;
  tableName?: string;
}
export interface TableField {
  columnAlias?: string;
  columnExpr?: string;
  columnType?: string;
}
export interface Query {
  /**
   * cubeId
   */
  cubeId: string;
}

/**
 * OK
 */
export type Response = VirtualTableSqlInfo[];

const path = '/api/v2/dataset/getSqlInfoByCubeId';
const method = 'get';
