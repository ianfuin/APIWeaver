export interface JsApiTicketModel {
  agentId?: string;
  corpId?: string;
  nonceStr?: string;
  signature?: string;
  timestamp?: string;
}
export interface Query {
  /**
   * channelType
   */
  channelType: string;
  /**
   * url
   */
  url: string;
  /**
   * isCorp
   */
  isCorp?: boolean;
}

/**
 * OK
 */
export type Response = JsApiTicketModel;

const path = '/api/v2/jsapi/ticket';
const method = 'get';
