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
export type Body = DataLevelPermissionExtraConfigModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/datalevel/{cubeId}/extra';
const method = 'post';
