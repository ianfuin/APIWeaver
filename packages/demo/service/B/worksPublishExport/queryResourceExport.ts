export interface ResroucePackageExportResultVO {
  accessCode?: string;
  createor?: string;
  errorDetail?: string;
  errorMsg?: string;
  expireDate?: string;
  exportType?: number;
  gmtCreate?: string;
  id?: number;
  recordId?: string;
  recordName?: string;
  resourceId?: string;
  status?: number;
  workspaceId?: string;
  workspaceName?: string;
}

export interface Path {
  /**
   * resourceId
   */
  resourceId: string;
}

/**
 * OK
 */
export type Response = ResroucePackageExportResultVO[];

const path = '/api/v2/workspublish/export/listexport/{resourceId}';
const method = 'get';
