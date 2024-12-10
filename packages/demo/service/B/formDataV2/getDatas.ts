export interface QueryParamModel {
  componentIds?: string[];
  dataIds?: string[];
  editPage?: boolean;
  filter?: object;
  formId?: string;
  menuId?: string;
  orderBys?: OrderBy[];
  pageNum?: number;
  pageSize?: number;
}
export interface PaginatedVal {
  data?: object[];
  next?: number;
  orderBy?: OrderBy[];
  orderString?: string;
  pageNum?: number;
  pageSize?: number;
  pre?: number;
  start?: number;
  totalNum?: number;
  totalPages?: number;
}
export interface OrderBy {
  order?: string;
  orderBy?: string;
}
export interface Query {
  /**
   * menuId
   */
  menuId?: string;
}

export interface Path {
  /**
   * formId
   */
  formId: string;
}
export type Body = QueryParamModel;

/**
 * OK
 */
export type Response = PaginatedVal;

const path = '/api/v2/dataForm/{formId}/datas';
const method = 'post';
