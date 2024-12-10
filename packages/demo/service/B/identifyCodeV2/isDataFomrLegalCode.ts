export interface CodeLegalModel {
  legal?: boolean;
  reason?: number;
}
export interface Query {
  /**
   * id
   */
  id: string;
  /**
   * identifyCode
   */
  identifyCode: string;
}

/**
 * OK
 */
export type Response = CodeLegalModel;

const path = '/api/v2/identifyCode/isDataFormLegalCode';
const method = 'get';
