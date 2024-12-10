export interface CubeAccelerationCountModel {
  /**
   * 各种加速类型数量
   */
  accelerationTypeCounts?: AccelerationTypeCount[];
}
export interface AccelerationTypeCount {
  count?: number;
  type?: string;
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
export type Response = CubeAccelerationCountModel;

const path = '/api/v2/auditlog/analysis/cube/queryCubeAccelerationCount';
const method = 'get';
