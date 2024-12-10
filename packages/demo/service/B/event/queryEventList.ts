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
export interface Query {
  /**
   * keyword
   */
  keyword?: string;
  /**
   * creatorId
   */
  creatorId?: string;
  /**
   * createStartFrom
   */
  createStartFrom?: number;
  /**
   * createEndTo
   */
  createEndTo?: number;
}

/**
 * OK
 */
export type Response = EventModel[];

const path = '/api/v2/event/get';
const method = 'get';
