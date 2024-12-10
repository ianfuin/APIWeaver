export interface PaginatedValSqlHistoryDTO {
  data?: SqlHistoryDTO[];
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
export interface SqlHistoryDTO {
  costTime?: number;
  gmtCreate?: number;
  sqlText?: string;
  status?: number;
}
export interface OrderBy {
  order?: string;
  orderBy?: string;
}
export interface Query {
  /**
   * cubeId
   */
  cubeId?: string;
}

/**
 * OK
 */
export type Response = PaginatedValSqlHistoryDTO;

const path = '/api/v2/sql/history';
const method = 'get';
