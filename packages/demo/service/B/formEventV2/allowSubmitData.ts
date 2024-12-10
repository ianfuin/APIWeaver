export interface Path {
  /**
   * formId
   */
  formId: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/formEvent/allowSubmitData/{formId}';
const method = 'get';
