export interface QueryBloodModel {
  /**
   * 子节点数量
   */
  childrenCount?: number;
  /**
   * 资源是否被删除
   */
  deleted?: boolean;
  /**
   * 依赖关系类型
   */
  dependencyRelation?: string;
  /**
   * 下游
   */
  downstream?: QueryBloodModel[];
  /**
   * 发布状态
   */
  downstreamCount?: number;
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
   * 上游
   */
  upstream?: QueryBloodModel[];
  /**
   * 上游节点数量
   */
  upstreamCount?: number;
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
   * resourceType
   */
  resourceType: string;
  /**
   * workspaceId
   */
  workspaceId: string;
  /**
   * resourceId
   */
  resourceId: string;
  /**
   * queryType
   */
  queryType?: string;
}

/**
 * OK
 */
export type Response = QueryBloodModel[];

const path = '/api/v2/blood/analysis/query';
const method = 'get';
