export interface Query {
  /**
   * organizationId
   */
  organizationId: string;
  /**
   * nickname
   */
  nickname: string;
  /**
   * userId
   */
  userId?: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/organizationUser/checkNickname';
const method = 'get';
