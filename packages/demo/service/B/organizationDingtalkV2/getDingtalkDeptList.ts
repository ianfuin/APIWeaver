export interface DingtalkStaffParamModel {
  deptId?: number;
  pageNum?: number;
  pageSize?: number;
}
export interface DingtalkDeptInfoModel {
  autoAddUser?: boolean;
  createDeptGroup?: boolean;
  deptUserCount?: number;
  extendInfo?: string;
  id?: number;
  name?: string;
  parentId?: number;
}

export type Body = DingtalkStaffParamModel;

/**
 * OK
 */
export type Response = DingtalkDeptInfoModel[];

const path = '/api/v2/organization/dingtalk/getDingtalkDeptList';
const method = 'post';
