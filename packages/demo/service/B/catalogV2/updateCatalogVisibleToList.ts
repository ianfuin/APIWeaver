export interface CatalogVisibleToInfoModel {
  addUser?: object[];
  catalogId?: string;
  delUser?: object[];
  visibleToType?: string;
}

export type Body = CatalogVisibleToInfoModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/catalogs/visible/users';
const method = 'post';
