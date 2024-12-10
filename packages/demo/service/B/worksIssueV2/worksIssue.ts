export interface WorksIssueModel {
  platForm?: string;
  prodId?: string;
  prodType?: string;
  workspaceId?: string;
}
export interface WorksIssueResultModel {
  gmtCreate?: string;
  issueUrl?: string;
  platForm?: number;
  prodId?: string;
  prodName?: string;
  prodOwner?: string;
  prodType?: string;
}
export interface Query {
  /**
   * 工作空间ID, 必传
   */
  workspaceId?: string;
}

export type Body = WorksIssueModel;

/**
 * OK
 */
export type Response = WorksIssueResultModel;

const path = '/api/v2/works/issue';
const method = 'post';
