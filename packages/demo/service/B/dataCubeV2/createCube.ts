export interface TableInfoDTO {
  aimDirId?: string;
  comment?: string;
  cubeType?: string;
  customizeSQL?: boolean;
  customizeSqlContent?: string;
  dsId?: string;
  dsName?: string;
  etlGenerateTable?: boolean;
  mixTable?: boolean;
  sqlview?: boolean;
  tableId?: string;
  tableName?: string;
  userDefineCubeName?: string;
}
export interface Query {
  /**
   * workspaceId
   */
  workspaceId: string;
}

export type Body = TableInfoDTO;

/**
 * OK
 */
export type Response = string;

const path = '/api/v2/datacube/create';
const method = 'post';
