export interface DashboardGlobalParamDO {
  config?: string;
  createUser?: string;
  dashboardId?: string;
  gmtCreate?: string;
  id?: number;
  paramContent?: string;
  paramKey?: string;
}
export interface Query {
  /**
   * viewType
   */
  viewType?: string;
}

export interface Path {
  /**
   * dashboardId
   */
  dashboardId: string;
}

/**
 * OK
 */
export type Response = DashboardGlobalParamDO[];

const path = '/api/v2/dashboard/{dashboardId}/globalParam';
const method = 'get';
