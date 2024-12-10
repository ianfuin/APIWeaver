export interface FeishuUserModel {
  departmentIds?: string[];
  name?: string;
  userId?: string;
}

/**
 * OK
 */
export type Response = FeishuUserModel[];

const path = '/api/v2/organization/feishu/deptUserList';
const method = 'get';
