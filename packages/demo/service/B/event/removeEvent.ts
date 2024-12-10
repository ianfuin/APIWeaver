export interface EventRemoveModel {
  bindChannelId?: string;
  businessName?: string;
}

export type Body = EventRemoveModel[];

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/event/remove';
const method = 'delete';
