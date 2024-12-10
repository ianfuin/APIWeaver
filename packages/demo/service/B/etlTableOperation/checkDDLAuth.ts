export interface Path {
  /**
   * dsId
   */
  dsId: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/etl/table/checkDDLAuth/{dsId}';
const method = 'get';
