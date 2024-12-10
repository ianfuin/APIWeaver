export interface EventDataParamModel {
  eventId?: string;
  primaryValue?: string;
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

export type Body = EventDataParamModel;

/**
 * OK
 */
export type Response = PaginatedVal;

const path = '/api/v2/formEvent/queryData';
const method = 'post';
