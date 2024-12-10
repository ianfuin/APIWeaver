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

export type Body = DingtalkInnerAppConfigModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/organization/dingtalkInnerApp/setting/save';
const method = 'post';
