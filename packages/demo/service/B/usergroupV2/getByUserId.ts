export interface Query {
  /**
   * userId
   */
  userId: string;
}

/**
 * OK
 */
export type Response = string[];

const path = '/api/v2/usergroup/organizationUser';
const method = 'get';
