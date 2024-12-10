export interface QueryActiveUserRequestModel {
  /**
   * 结束日期
   */
  endDate?: string;
  /**
   * 开始日期
   */
  startDate?: string;
  /**
   * 用户ID列表
   */
  userIds?: string[];
}
export interface ReportViewsModel {
  /**
   * 操作人id
   */
  operatorId?: string;
  /**
   * 操作人
   */
  operatorName?: string;
  /**
   * 组织ID
   */
  organizationId?: string;
  /**
   * 点击访问量
   */
  pv?: number;
  /**
   * 报表ID
   */
  reportId?: string;
  /**
   * 报表名称
   */
  reportName?: string;
  /**
   * 报表类型
   */
  reportType?: string;
  /**
   * 报告日期
   */
  theDate?: string;
  /**
   * 用户访问量
   */
  uv?: number;
  /**
   * 工作空间ID
   */
  workspaceId?: string;
  /**
   * 工作空间名称
   */
  workspaceName?: string;
}

export type Body = QueryActiveUserRequestModel;

/**
 * OK
 */
export type Response = ReportViewsModel[];

const path = '/api/v2/auditlog/analysis/user/listActiveUsers';
const method = 'post';
