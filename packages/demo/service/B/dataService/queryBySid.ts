export interface QueryParam {
  conditions?: object;
  returnFields?: string[];
}
export interface DataResult {
  headers?: ColumnMeta[];
  sql?: string;
  values?: Value[][];
}
export interface ColumnMeta {
  aggregator?: string;
  column?: string;
  dataType?: string;
  granularity?: string;
  label?: string;
  type?: string;
}
export interface Value {
  l?: string;
  r?: string;
  v?: string;
}

export interface Path {
  /**
   * sid
   */
  sid: string;
}
export type Body = QueryParam;

/**
 * OK
 */
export type Response = DataResult;

const path = '/api/v2/dataservice/{sid}/debug';
const method = 'post';
