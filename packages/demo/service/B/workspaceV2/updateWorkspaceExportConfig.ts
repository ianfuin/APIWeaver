export interface WorkspaceExportConfigModel {
  dataExport?: boolean;
  defaultExportType?: boolean;
  exportMainSwitch?: boolean;
  exportToLocal?: boolean;
  exportToServer?: boolean;
  imageExport?: boolean;
  pdfExport?: boolean;
  workspaceId?: string;
}

export interface Path {
  /**
   * workspaceId
   */
  workspaceId: string;
}
export type Body = WorkspaceExportConfigModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/ws/{workspaceId}/export/config';
const method = 'put';
