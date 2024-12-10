export interface DataLevelPermissionRuleModel {
  cubeId?: string;
  hitTakeEffect?: number;
  isOpen?: number;
  permissionMode?: 'COMPLEX' | 'SIMPLE';
  ruleAttribute?: 'CUSTOM' | 'MISSED';
  ruleContentModel?: DataLevelPermissionRuleContentModel;
  ruleId?: string;
  ruleLevelType?: 'ROW_LEVEL' | 'COLUMN_LEVEL';
  ruleName?: string;
  ruleTargetScope?: 'NONE' | 'ALL' | 'OTHERS';
  ruleUsersModel?: DataLevelPermissionRuleUsersModel;
}
export interface DataLevelPermissionConfigModel {
  cubeId?: string;
  extraConfigModel?: DataLevelPermissionExtraConfigModel;
  isOpen?: number;
  ruleModels?: DataLevelPermissionRuleModel[];
  ruleType?: 'ROW_LEVEL' | 'COLUMN_LEVEL';
}
export interface DataLevelPermissionRuleContentModel {
  ruleContent?: RuleContent;
  ruleContentJson?: string;
  ruleContentType?:
    | 'ROW_FIELD'
    | 'ROW_PALCEHOLDER'
    | 'COLUMN_FORBID'
    | 'COLUMN_MASK'
    | 'COLUMN_CONFUSE';
  ruleOriginConfigJson?: string;
}
export interface DataLevelPermissionRuleUsersModel {
  tags?: object;
  userGroups?: string[];
  users?: string[];
}
export interface DataLevelPermissionExtraConfigModel {
  cubeId?: string;
  missHitPolicy?: 'NONE' | 'ALL';
  permissionMode?: 'COMPLEX' | 'SIMPLE';
  ruleType?: 'ROW_LEVEL' | 'COLUMN_LEVEL';
}

export interface Path {
  /**
   * cubeId
   */
  cubeId: string;
}
export type Body = DataLevelPermissionRuleModel;

/**
 * OK
 */
export type Response = DataLevelPermissionConfigModel;

const path = '/api/v2/datalevel/{cubeId}/rule';
const method = 'post';
