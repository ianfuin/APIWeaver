export interface APIStatisticsVO {
  activeApiCount?: number;
  apiCount?: number;
  avgRt?: number;
  failCount?: number;
  inactiveApiCount?: number;
  succsssCount?: number;
  totalCallCount?: number;
}

/**
 * OK
 */
export type Response = APIStatisticsVO;

const path = '/api/v2/dataservice/record/orgstatistics';
const method = 'get';
