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
export interface LoginLogModel {
  /**
   * 账号名
   */
  accountName?: string;
  /**
   * 用户昵称
   */
  nickName?: string;
  /**
   * 操作时间
   */
  operationTime?: string;
  /**
   * 操作类型
   */
  operationType?: string;
  /**
   * 用户IP
   */
  userAccessIp?: string;
  /**
   * 用户id
   */
  userId?: string;
}

export type Body = QueryLogDetailRequestModel;

/**
 * OK
 */
export type Response = LoginLogModel[];

const path = '/api/v2/auditlog/details/listLoginLog';
const method = 'post';
