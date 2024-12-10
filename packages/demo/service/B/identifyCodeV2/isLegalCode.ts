export interface CodeLegalModel {
  legal?: boolean;
  reason?: number;
}
export interface Query {
  /**
   * metricId
   */
  metricId: string;
  /**
   * identifyCode
   */
  identifyCode: string;
}

/**
 * OK
 */
export type Response = CodeLegalModel;

const path = '/api/v2/identifyCode/isLegalCode';
const method = 'get';
