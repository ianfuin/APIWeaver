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
export interface PermissionLogModel {
  detailInfo?: string;
  gmtCreate?: string;
  grantedID?: string;
  grantedType?: string;
  operationType?: string;
  operatorAccountName?: string;
  operatorId?: string;
  operatorName?: string;
  organizationId?: string;
  targetId?: string;
  targetName?: string;
  targetType?: string;
  workspaceId?: string;
  workspaceName?: string;
}

export type Body = QueryLogDetailRequestModel;

/**
 * OK
 */
export type Response = PermissionLogModel[];

const path = '/api/v2/auditlog/details/listPermissionOperationLog';
const method = 'post';
