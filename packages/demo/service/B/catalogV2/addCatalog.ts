export interface Path {
  /**
   * catalogName
   */
  catalogName?: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/catalogs/{catalogName}';
const method = 'post';
