export interface Path {
  /**
   * 仪表板id
   */
  dashboardId: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/dashboard/{dashboardId}';
const method = 'delete';
