export interface Query {
  /**
   * targetOrganization
   */
  targetOrganization: string;
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
  /**
   * publishScope
   */
  publishScope: number;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/template/{templateId}/modifyScope/{publishScope}';
const method = 'put';
