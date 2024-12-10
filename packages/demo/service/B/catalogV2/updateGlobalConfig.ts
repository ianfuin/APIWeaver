export interface CatalogGlobalConfigModel {
  showHasAuthWorks?: boolean;
}

export type Body = CatalogGlobalConfigModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/catalogs/config/global';
const method = 'put';
