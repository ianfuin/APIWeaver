export interface Query {
  /**
   * channelId
   */
  channelId: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/channel/remove';
const method = 'get';
