export interface DataLevelPermissionConfigModel {
  cubeId?: string;
  extraConfigModel?: DataLevelPermissionExtraConfigModel;
  isOpen?: number;
  ruleModels?: DataLevelPermissionRuleModel[];
  ruleType?: 'ROW_LEVEL' | 'COLUMN_LEVEL';
}
export interface DataLevelPermissionExtraConfigModel {
  cubeId?: string;
  missHitPolicy?: 'NONE' | 'ALL';
  permissionMode?: 'COMPLEX' | 'SIMPLE';
  ruleType?: 'ROW_LEVEL' | 'COLUMN_LEVEL';
}
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
export interface Query {
  /**
   * dataLevelType
   */
  dataLevelType: string;
}

export interface Path {
  /**
   * cubeId
   */
  cubeId: string;
}

/**
 * OK
 */
export type Response = DataLevelPermissionConfigModel;

const path = '/api/v2/datalevel/{cubeId}';
const method = 'get';
