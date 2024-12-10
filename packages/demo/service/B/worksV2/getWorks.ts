export interface PaginatedValWorkDTO {
  data?: WorkDTO[];
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
export interface WorkDTO {
  workId?: string;
  workName?: string;
  workType?: string;
  workspaceName?: string;
}
export interface OrderBy {
  order?: string;
  orderBy?: string;
}
export interface Query {
  /**
   * 作品类型, 可不传
   */
  workType?: string;
  /**
   * 工作空间ID, 可不传
   */
  targetWorkspaceId?: string;
  /**
   * 名称搜索关键字, 可不传
   */
  keyword?: string;
  /**
   * 排序根据:name type workspace, 不传默认按名称排序
   */
  sortBy?: string;
  /**
   * 升序:asc 降序：desc
   */
  sortType?: string;
  /**
   * pageSize
   */
  pageSize: number;
  /**
   * pageNum
   */
  pageNum: number;
  /**
   * notInCatalog
   */
  notInCatalog?: boolean;
}

/**
 * OK
 */
export type Response = PaginatedValWorkDTO;

const path = '/api/v2/works';
const method = 'get';
