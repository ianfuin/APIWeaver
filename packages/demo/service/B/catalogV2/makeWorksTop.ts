export interface Path {
  /**
   * catalogId
   */
  catalogId?: string;
  /**
   * workId
   */
  workId?: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/catalogs/{catalogId}/tops/{workId}';
const method = 'put';
