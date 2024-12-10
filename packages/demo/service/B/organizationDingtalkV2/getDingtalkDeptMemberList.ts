export interface DingtalkStaffParamModel {
  deptId?: number;
  pageNum?: number;
  pageSize?: number;
}

export type Body = DingtalkStaffParamModel;

/**
 * OK
 */
export type Response = object;

const path = '/api/v2/organization/dingtalk/getDingtalkDeptMemberList';
const method = 'post';
