export interface Query {
  /**
   * dashboardTheme
   */
  dashboardTheme?: string;
}

/**
 * OK
 */
export type Response = string;

const path = '/api/v2/watermark/query';
const method = 'get';
