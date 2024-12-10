export interface EventModel {
  bindChannelId?: string;
  bindChannelName?: string;
  bindChannelStatus?: number;
  businessName?: string;
  creator?: string;
  creatorName?: string;
  gmtCreate?: string;
  gmtModified?: string;
  operator?: string;
  operatorName?: string;
  subscribedEvent?: string[];
}

export type Body = EventModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/event/modify';
const method = 'post';
