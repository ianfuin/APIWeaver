export interface WorkIdsModel {
  workIds?: string[];
}
export interface Query {
  /**
   * fromCatalogId
   */
  fromCatalogId?: string;
}

export interface Path {
  /**
   * catalogId
   */
  catalogId?: string;
}
export type Body = WorkIdsModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/catalogs/{catalogId}/works';
const method = 'put';
