export interface Path {
  /**
   * dashboardId
   */
  dashboardId: string;
  /**
   * componentId
   */
  componentId: string;
}

/**
 * OK
 */
export type Response = object;

const path =
  '/restapi/dashboard/dashboards/{dashboardId}/components/{componentId}/jsonsource';
const method = 'get';
