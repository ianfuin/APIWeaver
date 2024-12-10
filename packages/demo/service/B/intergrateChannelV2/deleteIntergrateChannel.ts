export interface Path {
  /**
   * 嵌入渠道id
   */
  intergrateChannelId: number;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/intergratechannel/{intergrateChannelId}';
const method = 'delete';
