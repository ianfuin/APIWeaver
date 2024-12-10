export interface Query {
  /**
   * workspaceId
   */
  workspaceId: string;
  /**
   * dsId
   */
  dsId: string;
  /**
   * tableName
   */
  tableName: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/dataForm/hasLocalImage';
const method = 'get';
