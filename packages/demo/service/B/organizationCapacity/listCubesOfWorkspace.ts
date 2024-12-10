export interface PaginatedValQueryCubesOfWorkspaceVO {
  data?: QueryCubesOfWorkspaceVO[];
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
export interface QueryCubesOfWorkspaceVO {
  creatorName?: string;
  cubeId?: string;
  cubeName?: string;
  enableQuickindexTime?: string;
  lastModifyTime?: string;
  size?: string;
}
export interface OrderBy {
  order?: string;
  orderBy?: string;
}
export interface Query {
  /**
   * workspaceId
   */
  workspaceId: string;
  /**
   * 排序字段
   */
  orderType?: string;
  /**
   * desc
   */
  desc?: boolean;
  /**
   * pageNo
   */
  pageNo: number;
  /**
   * pageSize
   */
  pageSize: number;
  /**
   * cubeName
   */
  cubeName?: string;
}

/**
 * OK
 */
export type Response = PaginatedValQueryCubesOfWorkspaceVO;

const path = '/api/v2/organization/quickindex/manager/listCubesOfWorkspace';
const method = 'get';
