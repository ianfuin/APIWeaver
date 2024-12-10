export interface TableModel {
  comment?: string;
  createTime?: string;
  creatorId?: string;
  dataSize?: number;
  dataType?:
    | 'upload'
    | 'transfer'
    | 'mysql'
    | 'sqlServer'
    | 'postgresql'
    | 'odps'
    | 'ossCsv'
    | 'ossExcel'
    | 'oss'
    | 'staticUpload';
  instanceId?: string;
  modifyTime?: string;
  repositoryId?: string;
  sourceTable?: SourceTable;
  statusType?: 'success' | 'fail' | 'running' | 'submit' | 'deleted' | 'error';
  tableDisplayName?: string;
  tableId?: string;
  tableName?: string;
  targetTable?: TargetTable;
}
export interface SourceTable {
  alias?: string;
  column?: LoadInfoSettingColumn[];
  dbName?: string;
  dsId?: string;
  partition?: string;
  schema?: string;
  tableId?: string;
  tableName?: string;
  type?: string;
  url?: string;
}
export interface TargetTable {
  alias?: string;
  column?: LoadInfoSettingColumn[];
  partition?: string;
  partitionSize?: number;
  tableName?: string;
  type?: string;
}
export interface Query {
  /**
   * workspaceId
   */
  workspaceId: string;
  /**
   * keyword
   */
  keyword?: string;
  /**
   * pageNum
   */
  pageNum?: number;
  /**
   * pageSize
   */
  pageSize?: number;
  /**
   * dsId
   */
  dsId: string;
}

/**
 * OK
 */
export type Response = TableModel;

const path = '/api/v2/mix/table/listByDsId';
const method = 'get';
