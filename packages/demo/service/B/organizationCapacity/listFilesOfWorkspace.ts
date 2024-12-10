export interface PaginatedValQueryFilesOfWorkspaceVO {
  data?: QueryFilesOfWorkspaceVO[];
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
export interface QueryFilesOfWorkspaceVO {
  /**
   * 创建者
   */
  creatorName?: string;
  /**
   * 资源名称
   */
  fileName?: string;
  /**
   * 最近更新时间
   */
  lastModifyTime?: string;
  /**
   * 大小
   */
  size?: string;
  /**
   * 上传文件时间
   */
  uploadTime?: string;
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
   * fileName
   */
  fileName?: string;
}

/**
 * OK
 */
export type Response = PaginatedValQueryFilesOfWorkspaceVO;

const path = '/api/v2/organization/quickindex/manager/listFilesOfWorkspace';
const method = 'get';
