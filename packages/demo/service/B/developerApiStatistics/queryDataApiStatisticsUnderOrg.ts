export interface StatisticsInfoVo {
  activeApiCount?: number;
  avgRespTime?: number;
  callCountToday?: number;
  failCallCountToday?: number;
  inactiveApiCount?: number;
  successCallCountToday?: number;
  totalApiCount?: number;
}

/**
 * OK
 */
export type Response = StatisticsInfoVo;

const path = '/api/v2/developerApi/statistics';
const method = 'get';
