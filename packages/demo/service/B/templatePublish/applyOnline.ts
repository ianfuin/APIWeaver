export interface Query {
  /**
   * publishScope
   */
  publishScope?: number;
  /**
   * targetOrganization
   */
  targetOrganization?: string;
  /**
   * demoCenter
   */
  demoCenter?: number;
  /**
   * demoMobileCenter
   */
  demoMobileCenter?: number;
}

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

const path = '/api/v2/template/{templateId}/applyOnline';
const method = 'put';
