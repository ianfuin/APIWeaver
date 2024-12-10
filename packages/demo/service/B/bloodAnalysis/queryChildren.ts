export interface BaseResourceModel {
  globalParameter?: boolean;
  /**
   * 组织id
   */
  organizationId?: string;
  /**
   * 所有者
   */
  ownerName?: string;
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
  /**
   * upstreamResourceId
   */
  upstreamResourceId?: string;
  /**
   * downstreamResourceId
   */
  downstreamResourceId?: string;
}

/**
 * OK
 */
export type Response = BaseResourceModel[];

const path = '/api/v2/blood/analysis/queryChildren';
const method = 'get';
