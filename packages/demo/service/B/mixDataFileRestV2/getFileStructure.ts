export type FileParseStructureModel = any;
export interface TableColumnModel {
  columnDisplayName?: string;
  columnId?: string;
  columnName?: string;
  columnType?: string;
  comment?: string;
  createTime?: string;
  creatorId?: string;
  modifyTime?: string;
  ordinal?: number;
  repositoryId?: string;
  tableId?: string;
  tableName?: string;
}
export interface Query {
  /**
   * workspaceId
   */
  workspaceId: string;
}

export type Body = FileParseStructureModel;

/**
 * OK
 */
export type Response = TableColumnModel[];

const path = '/api/v2/mix/datafile/fileStructure';
const method = 'post';
