export interface EsSearchConfigModel {
  onlySearchCatalog?: boolean;
  onlyShowAuth?: boolean;
}

/**
 * OK
 */
export type Response = EsSearchConfigModel;

const path = '/api/v2/search/getSearchSetting';
const method = 'get';
