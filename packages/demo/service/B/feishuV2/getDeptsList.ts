export interface FeishuDeptmentModel {
  departmentId?: string;
  name?: string;
  parentDepartmentId?: string;
}

/**
 * OK
 */
export type Response = FeishuDeptmentModel[];

const path = '/api/v2/organization/feishu/deptList';
const method = 'get';
