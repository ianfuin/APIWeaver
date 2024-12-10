export interface IntergrateChannelBO {
  description?: string;
  id?: number;
  sysName?: string;
  type?: number;
  url?: string;
}

/**
 * OK
 */
export type Response = IntergrateChannelBO[];

const path = '/api/v2/intergratechannel/list';
const method = 'get';
