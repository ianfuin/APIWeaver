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
export interface ActiveUserRankingModel {
  /**
   * 头像类型,material-内置头像,local-本地上传
   */
  avatarType?: string;
  /**
   * 头像url
   */
  avatarValue?: string;
  /**
   * 累计访问次数
   */
  resourceViews?: number;
  /**
   * 用户id
   */
  userId?: string;
  /**
   * 用户昵称
   */
  userNick?: string;
  /**
   * 用户角色,1-开发者,2-访问者,3-分析师
   */
  userType?: number;
}

export type Body = UserViewAnalysisModel;

/**
 * OK
 */
export type Response = ActiveUserRankingModel[];

const path = '/api/v2/auditlog/analysis/user/queryActiveUserRanking';
const method = 'post';
