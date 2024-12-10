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
  /**
   * workspaceId
   */
  workspaceId: string;
  /**
   * keyword
   */
  keyword?: string;
  /**
   * pageNum
   */
  pageNum?: number;
  /**
   * pageSize
   */
  pageSize?: number;
  /**
   * dsId
   */
  dsId: string;
}

/**
 * OK
 */
export type Response = TableDTO;

const path = '/api/v2/metadata/listTable';
const method = 'get';
