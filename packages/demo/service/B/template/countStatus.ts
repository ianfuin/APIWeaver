export interface Query {
  /**
   * demoCenter
   */
  demoCenter?: number;
  /**
   * demoMobileCenter
   */
  demoMobileCenter?: number;
  /**
   * resourceType
   */
  resourceType?: string;
  /**
   * isOwner
   */
  isOwner?: boolean;
  /**
   * isSuper
   */
  isSuper?: boolean;
}

/**
 * OK
 */
export type Response = object;

const path = '/api/v2/template/countStatus';
const method = 'get';
