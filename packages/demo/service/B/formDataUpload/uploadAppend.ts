export type ImportRecordParamModel = any;
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

export interface Path {
  /**
   * formId
   */
  formId: string;
}
export type Body = ImportRecordParamModel;

/**
 * OK
 */
export type Response = FileUploadValModel;

const path = '/api/v2/importData/{formId}/upload';
const method = 'post';
