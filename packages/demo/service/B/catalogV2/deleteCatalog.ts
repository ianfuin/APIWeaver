export interface Path {
  /**
   * catalogId
   */
  catalogId?: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/catalogs/{catalogId}';
const method = 'delete';
