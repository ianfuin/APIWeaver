export interface DataLevelPermissionWhiteListOperateModel {
  cubeId?: string;
  operateType?: 'ADD' | 'DELETE';
  ruleType?: 'ROW_LEVEL' | 'COLUMN_LEVEL';
  targetIds?: string[];
  targetType?: number;
}

export interface Path {
  /**
   * cubeId
   */
  cubeId: string;
}
export type Body = DataLevelPermissionWhiteListOperateModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/datalevel/{cubeId}/whitelist';
const method = 'put';
