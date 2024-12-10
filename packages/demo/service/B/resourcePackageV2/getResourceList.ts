export interface PaginatedValImportPackageResultVO {
  data?: ImportPackageResultVO[];
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
export interface ImportPackageResultVO {
  createor?: string;
  description?: string;
  gmtCreate?: string;
  gmtModified?: string;
  modifier?: string;
  organizationId?: string;
  resourceId?: string;
  resourceName?: string;
  resourceWorks?: ResourceWorks;
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
export type Response = PaginatedValImportPackageResultVO;

const path = '/api/v2/resourcepackage/export';
const method = 'get';
