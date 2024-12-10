export interface ChannelDetail {
  channelId?: string;
  channelName?: string;
  channelOperationRelationCount?: number;
  channelType?: number;
  cid?: string;
  creator?: string;
  creatorNick?: string;
  eventSubscriptionUse?: boolean;
  gmtCreate?: string;
  gmtModified?: string;
  organizationId?: string;
  parameters?: ChannelParameterModel[];
  status?: number;
  system?: boolean;
}
export interface ChannelParameterModel {
  channelId?: string;
  parameterName?: string;
  parameterValue?: string;
}

export type Body = ChannelDetail;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/channel/add';
const method = 'post';
