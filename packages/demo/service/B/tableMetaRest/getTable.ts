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
export interface Query {
  'connInfo.id'?: number;
  'connInfo.dsId'?: string;
  'connInfo.showName'?: string;
  'connInfo.dsType'?: string;
  'connInfo.comments'?: string;
  'connInfo.connStr'?: string;
  'connInfo.userName'?: string;
  'connInfo.password'?: string;
  'connInfo.instance'?: string;
  'connInfo.config'?: string;
  'connInfo.gmtCreate'?: string;
  'connInfo.gmtModified'?: string;
  'connInfo.project'?: string;
  'connInfo.creatorId'?: string;
  'connInfo.modifiedBy'?: string;
  'connInfo.modifyUser'?: string;
  'connInfo.isOwner'?: number;
  'connInfo.dbSchema'?: string;
  'connInfo.workspaceId'?: string;
  'connInfo.authLevel'?: number;
  'connInfo.version'?: string;
  'connInfo.dsVersion'?: string;
  'connInfo.dsCreateOrigin'?: number;
  'connInfo.belongType'?: number;
  'connInfo.organizationId'?: string;
  'connInfo.authorizedUseType'?: number;
  'connInfo.dsGroup'?: number;
  /**
   * workspaceId
   */
  workspaceId?: string;
  baseId?: string;
  dsId?: string;
  tableName?: string;
  dbName?: string;
  schema?: string;
  tableId?: number;
  checkAuth?: boolean;
  fromEtl?: boolean;
}

/**
 * OK
 */
export type Response = TableDO;

const path = '/restapi/table/info';
const method = 'get';
