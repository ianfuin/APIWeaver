export interface Path {
  /**
   * 数据源类型:sqlserver|mysql|maxcompute|analyticdb_v3|postgresql
   */
  dsType?: string;
}

/**
 * OK
 */
export type Response = object;

const path = '/api/v2/etl/table/columnTypes/{dsType}';
const method = 'get';
