export interface DDConfigDTO {
  agentId?: string;
  appId?: string;
  corpId?: string;
  jsTicket?: string;
  nonceStr?: string;
  signature?: string;
  timeStamp?: string;
}
export interface Query {
  /**
   * corpid
   */
  corpid: string;
  /**
   * appid
   */
  appid: string;
  /**
   * url
   */
  url: string;
}

/**
 * OK
 */
export type Response = DDConfigDTO;

const path = '/api/v2/dingtalk/ddconfig';
const method = 'get';
