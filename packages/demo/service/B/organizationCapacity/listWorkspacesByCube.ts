export interface PaginatedValOrganizationWorkspaceInfoVO {
  data?: OrganizationWorkspaceInfoVO[];
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
export interface OrganizationWorkspaceInfoVO {
  /**
   * 已使用容量(总)
   */
  capacityUsed?: string;
  /**
   * 数据集加速使用容量
   */
  capacityUsedOfCube?: string;
  /**
   * 上传文件使用容量
   */
  capacityUsedOfFile?: string;
  /**
   * 所有者
   */
  owner?: string;
  workspaceId?: string;
  /**
   * 工作空间名称
   */
  workspaceName?: string;
}
export interface OrderBy {
  order?: string;
  orderBy?: string;
}
export interface Query {
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
   * workspaceName
   */
  workspaceName?: string;
}

/**
 * OK
 */
export type Response = PaginatedValOrganizationWorkspaceInfoVO;

const path = '/api/v2/organization/quickindex/manager/listWorkspacesByCube';
const method = 'get';
