export interface UserViewAnalysisModel {
  /**
   * 结束日期
   */
  endDate?: string;
  /**
   * 开始日期
   */
  startDate?: string;
  /**
   * 用户id
   */
  userId?: string;
}
export interface ActiveUserTrendingModel {
  /**
   * 日期
   */
  theDay?: string;
  /**
   * 浏览次数
   */
  viewCount?: number;
  /**
   * 访问人数
   */
  viewUserCount?: number;
}

export type Body = UserViewAnalysisModel;

/**
 * OK
 */
export type Response = ActiveUserTrendingModel[];

const path = '/api/v2/auditlog/analysis/user/queryActiveUserTrending';
const method = 'post';
