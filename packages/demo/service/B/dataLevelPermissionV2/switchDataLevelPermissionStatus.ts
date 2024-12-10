export interface DataLevelPermissionSwitchModel {
  cubeId?: string;
  isOpen?: number;
  ruleType?: 'ROW_LEVEL' | 'COLUMN_LEVEL';
}

export interface Path {
  /**
   * cubeId
   */
  cubeId: string;
}
export type Body = DataLevelPermissionSwitchModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/datalevel/{cubeId}/open';
const method = 'post';
