export interface CatalogModel {
  catalogId?: string;
  catalogName?: string;
}

export interface Path {
  /**
   * catalogId
   */
  catalogId?: string;
}
export type Body = CatalogModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/catalogs/{catalogId}';
const method = 'put';
