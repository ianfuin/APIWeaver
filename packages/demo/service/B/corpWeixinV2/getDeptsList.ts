export interface WxDeptInfoModel {
  id?: string;
  name?: string;
  name_en?: string;
  order?: string;
  parentid?: string;
}
export interface Query {
  /**
   * deptId
   */
  deptId?: string;
}

/**
 * OK
 */
export type Response = WxDeptInfoModel[];

const path = '/api/v2/organization/corpweixin/deptList';
const method = 'get';
