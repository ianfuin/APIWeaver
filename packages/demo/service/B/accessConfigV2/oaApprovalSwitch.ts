export interface Query {
  /**
   * channelType
   */
  channelType: string;
  /**
   * onOff
   */
  onOff: boolean;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/access/config/oa/switch';
const method = 'post';
