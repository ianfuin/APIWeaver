export type UploadFileModel = any;
export interface ExportUploadResultModel {
  ossUrl?: string;
  serverType?: string;
  success?: boolean;
  successHint?: string;
}

export type Body = UploadFileModel;

/**
 * OK
 */
export type Response = ExportUploadResultModel;

const path = '/api/v2/export/upload';
const method = 'post';
