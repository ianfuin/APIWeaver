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

const path = '/restapi/table/exist/{dsId}/{tableName}';
const method = 'get';
