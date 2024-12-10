export interface ActiveUserTypeModel {
  /**
   * 活跃资源数
   */
  activeUserCount?: number;
  /**
   * 资源类型
   */
  userType?: string;
}

/**
 * OK
 */
export type Response = ActiveUserTypeModel[];

const path = '/api/v2/auditlog/analysis/user/queryActiveUserOfOrg';
const method = 'get';
