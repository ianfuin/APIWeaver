export interface Query {
  /**
   * catalogId
   */
  catalogId: string;
}

/**
 * OK
 */
export type Response = object;

const path = '/api/v2/catalogs/visible/users';
const method = 'get';
