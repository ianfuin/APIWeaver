export interface Query {
  /**
   * channelType
   */
  channelType: string;
  /**
   * userId
   */
  userId: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/access/config/template/test';
const method = 'get';
