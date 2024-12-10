export interface Path {
  /**
   * mobileType
   */
  mobileType: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/organization/mobile/cancelUpdateContact/{mobileType}';
const method = 'get';
