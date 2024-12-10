export interface ApiDatasourceCountOfOrgModel {
  /**
   * 已创建数量
   */
  createCount?: number;
  /**
   * 组织支持数量, -1代表无限制
   */
  supportCount?: number;
}

/**
 * OK
 */
export type Response = ApiDatasourceCountOfOrgModel;

const path = '/api/v2/apiDataSource/table/countApiOfOrg';
const method = 'post';
