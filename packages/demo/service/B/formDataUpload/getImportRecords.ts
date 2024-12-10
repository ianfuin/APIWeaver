export interface ImportQueryParamModel {
  creatorId?: string;
  description?: string;
  fileName?: string;
  formId?: string;
  importTime?: TimeRangeQueryParamModel;
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
export interface TimeRangeQueryParamModel {
  endTime?: string;
  startTime?: string;
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
export type Body = ImportQueryParamModel;

/**
 * OK
 */
export type Response = PaginatedVal;

const path = '/api/v2/importData/{formId}/records';
const method = 'post';
