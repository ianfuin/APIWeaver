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

/**
 * OK
 */
export type Response = WorkspaceExportConfigModel;

const path = '/api/v2/ws/{workspaceId}/export/config';
const method = 'get';
