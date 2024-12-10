export interface ChannelStatusModel {
  name?: string;
  status?: boolean;
}
export interface Query {
  /**
   * channelType
   */
  channelType?: string;
}

/**
 * OK
 */
export type Response = ChannelStatusModel;

const path = '/api/v2/channel/status';
const method = 'get';
