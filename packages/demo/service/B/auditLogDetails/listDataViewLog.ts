export interface QueryLogDetailRequestModel {
  /**
   * 查询结束时间
   */
  endDate?: string;
  /**
   * 操作人
   */
  operatorId?: string;
  /**
   * 操作类型
   */
  operatorTypes?: string[];
  /**
   * 资源ID
   */
  resourceIds?: string[];
  /**
   * 资源类型
   */
  resourceType?: string;
  /**
   * 查询开始时间
   */
  startDate?: string;
  /**
   * 空间ID
   */
  workspaceId?: string;
}
export interface DataViewLogModel {
  /**
   * 操作时间
   */
  operationTime?: string;
  /**
   * 操作类型
   */
  operationType?: string;
  /**
   * 操作类型描述
   */
  operationTypeDesc?: string;
  /**
   * 操作人userId
   */
  operatorId?: string;
  /**
   * 资源ID
   */
  reportId?: string;
  /**
   * 资源名称
   */
  reportName?: string;
  /**
   * 操作类型
   */
  reportType?: string;
  /**
   * 操作类型描述
   */
  reportTypeDesc?: string;
  /**
   * 用户账号
   */
  userAccount?: string;
  /**
   * 用户名
   */
  userName?: string;
  /**
   * 空间ID
   */
  workspaceId?: string;
  /**
   * 空间名称
   */
  workspaceName?: string;
}

export type Body = QueryLogDetailRequestModel;

/**
 * OK
 */
export type Response = DataViewLogModel[];

const path = '/api/v2/auditlog/details/listDataViewLog';
const method = 'post';
