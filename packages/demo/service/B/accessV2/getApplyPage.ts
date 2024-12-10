export interface AccessPaginatedQuery {
  applicantId?: string;
  approveUserId?: string;
  keyword?: string;
  pageNum?: number;
  pageSize?: number;
  resourceId?: string;
  resourceTypes?: string[];
  sortBy?: string;
  sortType?: string;
  statuses?: number[];
}
export interface PaginatedValApplicationDTO {
  data?: ApplicationDTO[];
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
export interface ApplicationDTO {
  /**
   * 申请人头像类型
   */
  applicantAvatarType: number;
  /**
   * 申请人UID
   */
  applicantId: string;
  /**
   * 申请人昵称
   */
  applicantName: string;
  /**
   * 申请id
   */
  applicationId: string;
  /**
   * 申请理由
   */
  applyReason: string;
  /**
   * 审批人头像类型
   */
  approverAvatarType: number;
  /**
   * 审批人UID
   */
  approverId: string;
  /**
   * 审批人昵称
   */
  approverName: string;
  /**
   * 申请权限点
   */
  authPointsValue?: number;
  channel?: number;
  deleteFlag?: boolean;
  /**
   * 权限有效期限
   */
  expireDate?: string;
  extInfo?: string;
  /**
   * 权限审批状态，0-未处理，1-通过, 2-拒绝, -1-撤销
   */
  flagStatus?: number;
  gmtCreate?: string;
  gmtModified?: string;
  /**
   * 处理理由
   */
  handleReason?: string;
  /**
   * 关联信息列表
   */
  relatedResources?: ApplicationDTO[];
  /**
   * 申请权限资源ID
   */
  resourceId: string;
  /**
   * 申请权限资源名称(报表名、空间名...)
   */
  resourceName: string;
  /**
   * 资源类型
   */
  resourceType: string;
  /**
   * 子资源列表
   */
  resources?: ApplicationDTO[];
  /**
   * 申请项目权限时的角色
   */
  roleId?: number;
  subType?: number;
  version?: string;
  /**
   * 空间名称
   */
  workspaceName?: string;
}
export interface OrderBy {
  order?: string;
  orderBy?: string;
}

export type Body = AccessPaginatedQuery;

/**
 * OK
 */
export type Response = PaginatedValApplicationDTO;

const path = '/api/v2/access/apply/page';
const method = 'post';
