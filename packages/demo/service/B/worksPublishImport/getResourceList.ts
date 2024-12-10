export interface PaginatedValResroucePackageImportResultVO {
  data?: ResroucePackageImportResultVO[];
  next?: number;
  orderBy?: OrderBy[];
  orderString?: string;
  pageNum?: number;
  pageSize?: number;
  pre?: number;
  start?: number;
  totalNum?: number;
  totalPages?: number;
}
export interface ResroucePackageImportResultVO {
  creator?: string;
  errorDetail?: string;
  errorMsg?: string;
  gmtCreate?: string;
  id?: number;
  resourceId?: string;
  resourceName?: string;
  resourceOwner?: string;
  status?: number;
  workspaceId?: string;
  workspaceName?: string;
}
export interface OrderBy {
  order?: string;
  orderBy?: string;
}
export interface Query {
  /**
   * queryParam
   */
  queryParam: string;
  /**
   * resourceName
   */
  resourceName?: string;
  /**
   * pageSize
   */
  pageSize: number;
  /**
   * pageNum
   */
  pageNum: number;
}

/**
 * OK
 */
export type Response = PaginatedValResroucePackageImportResultVO;

const path = '/api/v2/workspublish/import';
const method = 'get';
