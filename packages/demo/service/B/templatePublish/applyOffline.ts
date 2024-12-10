export interface Path {
  /**
   * templateId
   */
  templateId: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/template/{templateId}/applyOffline';
const method = 'put';
