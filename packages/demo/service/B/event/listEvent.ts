export interface PaginatedValEventModel {
  data?: EventModel[];
  next?: number;
  orderBy?: OrderBy[];
  orderString?: string;
  pageNum?: number;
  pageSize?: number;
  pre?: number;
  start?: number;
  totalNum?: number;
  totalPages?: number;
}
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
export interface OrderBy {
  order?: string;
  orderBy?: string;
}
export interface Query {
  /**
   * businessName
   */
  businessName?: string;
}

/**
 * OK
 */
export type Response = PaginatedValEventModel;

const path = '/api/v2/event/config/list';
const method = 'get';
