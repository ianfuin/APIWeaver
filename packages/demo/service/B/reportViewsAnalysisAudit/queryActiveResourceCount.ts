export interface ActiveResourceCountModel {
  /**
   * 活跃资源总数
   */
  activeResourceTotal?: number;
  activeResourceTypeModels?: ActiveResourceTypeModel[];
}
export interface ActiveResourceTypeModel {
  /**
   * 活跃资源数
   */
  activeResourceCount?: number;
  /**
   * 活跃资源占比
   */
  activeResourcePercent?: number;
  /**
   * 资源类型
   */
  resourceType?: string;
}
export interface Query {
  /**
   * workspaceId
   */
  workspaceId?: string;
}

/**
 * OK
 */
export type Response = ActiveResourceCountModel;

const path = '/api/v2/auditlog/analysis/views/queryActiveResourceCount';
const method = 'get';
