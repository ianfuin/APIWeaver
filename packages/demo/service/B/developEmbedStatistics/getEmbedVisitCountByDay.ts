export interface EmbedStatisticsDTO {
  count?: number;
  key?: string;
  tag?: object;
}
export interface Query {
  /**
   * start
   */
  start?: string;
  /**
   * end
   */
  end?: string;
}

/**
 * OK
 */
export type Response = EmbedStatisticsDTO[];

const path = '/api/v2/develop/embed/statistics/pvGroupByDay';
const method = 'get';
