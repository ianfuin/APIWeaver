export interface ResourceDetailModel {
  globalParameter?: boolean;
  /**
   * 最近更新时间
   */
  lastModifyTime?: string;
  /**
   * 组织id
   */
  organizationId?: string;
  /**
   * owner
   */
  ownerName?: string;
  /**
   * 近30天每天查询次数
   */
  queryTimesEveryDay?: object;
  /**
   * 近30天总查询次数
   */
  queryTimesThirtyDaysRecent?: number;
  /**
   * 与上下游有关联的节点
   */
  relatedNode?: boolean;
  /**
   * 资源id
   */
  resourceId?: string;
  /**
   * 资源名称
   */
  resourceName?: string;
  /**
   * 资源类型
   */
  resourceType?: string;
  /**
   * 发布状态
   */
  status?: number;
  /**
   * 空间id
   */
  workspaceId?: string;
  /**
   * 空间名称
   */
  workspaceName?: string;
}
export interface Query {
  /**
   * workspaceId
   */
  workspaceId: string;
  /**
   * resourceId
   */
  resourceId: string;
  /**
   * resourceType
   */
  resourceType: string;
}

/**
 * OK
 */
export type Response = ResourceDetailModel;

const path = '/api/v2/blood/analysis/queryResourceDetail';
const method = 'get';
