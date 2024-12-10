export interface DataLevelPermissionWhiteListModel {
  cubeId?: string;
  ruleType?: 'ROW_LEVEL' | 'COLUMN_LEVEL';
  usersModel?: DataLevelPermissionRuleUsersModel;
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
export type Body = DataLevelPermissionWhiteListModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/datalevel/{cubeId}/whitelist';
const method = 'post';
