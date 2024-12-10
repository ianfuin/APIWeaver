export interface Query {
  /**
   * withUser
   */
  withUser?: boolean;
  /**
   * withDept
   */
  withDept?: boolean;
}

export interface Path {
  /**
   * mobileType
   */
  mobileType: string;
}

/**
 * OK
 */
export type Response = object;

const path = '/api/v2/organization/mobile/deptsAndUsers/{mobileType}';
const method = 'get';
