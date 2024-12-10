export interface Query {
  /**
   * dsId
   */
  dsId: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/datasource/convert/aes';
const method = 'get';
