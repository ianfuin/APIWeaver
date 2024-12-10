export interface Query {
  /**
   * tableName
   */
  tableName: string;
  /**
   * dsId
   */
  dsId?: string;
  /**
   * isPhysicalTableName
   */
  isPhysicalTableName?: boolean;
  /**
   * workspaceId
   */
  workspaceId: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/mix/table/existTableNameByDs';
const method = 'get';
