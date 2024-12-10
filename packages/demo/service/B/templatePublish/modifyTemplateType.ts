export interface Path {
  /**
   * templateId
   */
  templateId: string;
  /**
   * templateTypes
   */
  templateTypes: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/template/{templateId}/modifyType/{templateTypes}';
const method = 'put';
