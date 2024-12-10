export interface ChannelModel {
  channelId?: string;
  channelName?: string;
  channelType?: number;
  creator?: string;
  eventSubscriptionUse?: boolean;
  gmtCreate?: string;
  gmtModified?: string;
  organizationId?: string;
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
export type Response = ChannelModel[];

const path = '/api/v2/channel/list/available';
const method = 'get';
