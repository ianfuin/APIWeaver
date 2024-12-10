export interface DashboardCreateWithFileModel {
  cubeId?: string;
  duration?: number;
  errorLines?: string;
  identifyName?: string;
  repositoryId?: number;
  tableId?: number;
  tableName?: string;
  uploadCount?: number;
  workspaceId?: string;
  writtenCount?: number;
}
export interface Query {
  /**
   * type
   */
  type?: string;
}

export type Body = string;

/**
 * OK
 */
export type Response = DashboardCreateWithFileModel;

const path = '/api/v2/dashboard/cube/upload';
const method = 'post';
