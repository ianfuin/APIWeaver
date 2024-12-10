export interface Query {
  /**
   * cubeId
   */
  cubeId: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/cube/x/migrate/correctCustomSqlDsId';
const method = 'get';
