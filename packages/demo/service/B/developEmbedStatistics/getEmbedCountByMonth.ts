export interface EmbedStatisticsDTO {
  count?: number;
  key?: string;
  tag?: object;
}

/**
 * OK
 */
export type Response = EmbedStatisticsDTO[];

const path = '/api/v2/develop/embed/statistics/countGroupByMonth';
const method = 'get';
