export interface CatalogSequenceModel {
  sequence?: string[];
  topNum?: number;
}

export type Body = CatalogSequenceModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/catalogs/sequence';
const method = 'put';
