export interface Path {
  /**
   * 报表id
   */
  reportId: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/report/{reportId}';
const method = 'delete';
