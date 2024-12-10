export interface EsSearchConfigModel {
  onlySearchCatalog?: boolean;
  onlyShowAuth?: boolean;
}

export type Body = EsSearchConfigModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/search/saveSearchSetting';
const method = 'post';
