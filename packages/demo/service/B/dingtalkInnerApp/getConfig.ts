export interface DingtalkInnerAppConfigModel {
  aesKey?: string;
  agentId?: string;
  appKey?: string;
  appSecret?: string;
  companyName?: string;
  corpId?: string;
  token?: string;
  userCount?: number;
}

/**
 * OK
 */
export type Response = DingtalkInnerAppConfigModel;

const path = '/api/v2/organization/dingtalkInnerApp/setting';
const method = 'get';
