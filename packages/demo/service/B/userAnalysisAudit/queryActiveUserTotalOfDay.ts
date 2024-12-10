export interface ActiveUserCountOfDurationModel {
  /**
   * 一个周期内的活跃用户数
   */
  activeUserCount?: number;
  /**
   * 环比
   */
  chainRatioOfDuration?: number;
  /**
   * 周期，月/日
   */
  duration?: string;
}

/**
 * OK
 */
export type Response = ActiveUserCountOfDurationModel[];

const path = '/api/v2/auditlog/analysis/user/queryActiveUserTotalOfDay';
const method = 'get';
