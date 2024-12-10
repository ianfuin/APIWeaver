export interface Query {
  /**
   * channelId
   */
  channelId: string;
  /**
   * message
   */
  message: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/channel/task/buildOne';
const method = 'get';
