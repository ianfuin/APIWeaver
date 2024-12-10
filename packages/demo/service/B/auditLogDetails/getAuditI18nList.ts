export interface AuditI18NModel {
  /**
   * 查看类型枚举
   */
  dataViewTypes?: ResourceI18NModel[];
  /**
   * 登录类型枚举
   */
  loginTypes?: ResourceI18NModel[];
  /**
   * 操作类型枚举
   */
  operationTypes?: ResourceI18NModel[];
  /**
   * 权限类型枚举
   */
  permissionTypes?: ResourceI18NModel[];
  /**
   * 操作目标枚举
   */
  targetTypes?: ResourceI18NModel[];
}
export interface ResourceI18NModel {
  /**
   * 操作类型枚举
   */
  resourceCode?: string;
  /**
   * 操作类型描述
   */
  resourceDesc?: string;
}

/**
 * OK
 */
export type Response = AuditI18NModel;

const path = '/api/v2/auditlog/details/getAuditI18nList';
const method = 'get';
