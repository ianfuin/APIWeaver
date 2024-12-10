export interface AuditLogValidityOfOrgModel {
  /**
   * 查看类日志可查询天数
   */
  dataViewLogSupportDays?: number;
  /**
   * 操作类日志可查询天数
   */
  functionLogSupportDays?: number;
  /**
   * 权限类日志可查询天数
   */
  permissionLogSupportDays?: number;
  /**
   * 天统计数据可查询天数
   */
  supportDays?: number;
}

/**
 * OK
 */
export type Response = AuditLogValidityOfOrgModel;

const path = '/api/v2/auditlog/analysis/views/getOrgAuditLogValidityPeriod';
const method = 'post';
