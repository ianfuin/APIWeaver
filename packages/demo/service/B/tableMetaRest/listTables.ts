export interface TableDTO {
  comments?: string;
  dataSize?: number;
  dsId?: string;
  fileName?: string;
  fileSize?: number;
  fileType?: 'txt' | 'csv' | 'xls' | 'xlsx';
  gmtModified?: string;
  name?: string;
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
  dsId?: string;
  projectId?: number;
  owner?: string;
  baseId?: string;
  schema?: string;
  tableName?: string;
  fileName?: string;
  fileType?: string;
  dbName?: string;
  fuzzyTableName?: string;
  pageNum?: number;
  pageSize?: number;
  offset?: number;
  limit?: number;
  /**
   * workspaceId
   */
  workspaceId?: string;
  optimization?: boolean;
}

/**
 * OK
 */
export type Response = TableDTO;

const path = '/restapi/table/list';
const method = 'get';
