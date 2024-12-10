export interface TableMetaByConfigParam {
  connConfig?: ConnectionConfig;
  fuzzyTableName?: string;
  pageNum?: number;
  pageSize?: number;
}
export interface TableDO {
  columns?: ColumnDO[];
  createTime?: string;
  customizeSql?: boolean;
  dbName?: string;
  dsType?: string;
  modifyDate?: string;
  schemaName?: string;
  tableComment?: string;
  tableId?: string;
  tableName?: string;
  view?: boolean;
}
export interface ConnectionConfig {
  accessId?: string;
  accessKey?: string;
  address?: string;
  authLevel?: number;
  belongType?: number;
  config?: ConnectionInfoConfig;
  creatorId?: string;
  dsCreateOrigin?: number;
  dsId?: string;
  dsType?: string;
  dsVersion?: string;
  encoded?: boolean;
  instance?: string;
  instanceId?: string;
  loginTicket?: string;
  modifyUser?: string;
  noSasl?: boolean;
  organizationId?: string;
  password?: string;
  port?: string;
  project?: string;
  region?: string;
  schema?: string;
  showName?: string;
  userName?: string;
  workspaceId?: string;
}
export interface ColumnDO {
  autoIncremented?: boolean;
  columnComment?: string;
  columnId?: number;
  columnName?: string;
  columnType?: string;
  createTime?: string;
  format?: string;
  isPartitionColumn?: number;
  modifyTime?: string;
  nullable?: boolean;
  tableName?: string;
}

export type Body = TableMetaByConfigParam;

/**
 * OK
 */
export type Response = TableDO;

const path = '/api/v2/metadata/tableInfo/byConfig';
const method = 'post';
