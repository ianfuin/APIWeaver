export type FileUploadAppendModel = any;
export interface FileUploadValModel {
  dsId?: string;
  duration?: number;
  errorLines?: string;
  repositoryId?: string;
  showName?: string;
  tableId?: string;
  tableName?: string;
  uploadCount?: number;
  writedCount?: number;
}
export interface Query {
  /**
   * workspaceId
   */
  workspaceId: string;
}

export type Body = FileUploadAppendModel;

/**
 * OK
 */
export type Response = FileUploadValModel;

const path = '/api/v2/mix/datafile/uploadAppend';
const method = 'post';
