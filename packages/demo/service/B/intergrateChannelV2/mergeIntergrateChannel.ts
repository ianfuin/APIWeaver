export interface IntergrateChannelBO {
  description?: string;
  id?: number;
  sysName?: string;
  type?: number;
  url?: string;
}

export type Body = IntergrateChannelBO;

/**
 * OK
 */
export type Response = IntergrateChannelBO;

const path = '/api/v2/intergratechannel/merge';
const method = 'post';
