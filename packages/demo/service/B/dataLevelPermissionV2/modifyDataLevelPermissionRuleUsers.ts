export interface DataLevelPermissionRuleUsersOperateModel {
  addModel?: DataLevelPermissionRuleUsersModel;
  cubeId?: string;
  delModel?: DataLevelPermissionRuleUsersModel;
  ruleId?: string;
}
export interface DataLevelPermissionRuleUsersModel {
  tags?: object;
  userGroups?: string[];
  users?: string[];
}

export interface Path {
  /**
   * cubeId
   */
  cubeId: string;
}
export type Body = DataLevelPermissionRuleUsersOperateModel;

/**
 * OK
 */
export type Response = DataLevelPermissionRuleUsersOperateModel;

const path = '/api/v2/datalevel/{cubeId}/rule/users';
const method = 'put';
