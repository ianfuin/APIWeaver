export interface Path {
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

const path = '/api/v2/etl/table/checkInsertAuth/{dsId}/{tableName}';
const method = 'get';
