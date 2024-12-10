export interface AutoInsightResultContent {
  data?: string;
  success?: boolean;
}
export interface Query {
  /**
   * 见解key
   */
  key?: string;
}

/**
 * OK
 */
export type Response = AutoInsightResultContent;

const path = '/api/v2/autoInsight/get';
const method = 'get';
