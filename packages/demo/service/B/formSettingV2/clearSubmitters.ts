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

const path = '/api/v2/form/{formId}/submitter';
const method = 'delete';
