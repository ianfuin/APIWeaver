export interface Query {
  /**
   * id
   */
  id: string;
  /**
   * type
   */
  type: number;
  /**
   * useBak
   */
  useBak: boolean;
}

/**
 * OK
 */
export type Response = string;

const path = '/api/v2/cube/x/migrate/change2OldCube';
const method = 'get';
