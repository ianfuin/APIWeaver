export interface FeishuConfigModel {
  aesKey?: string;
  appId?: string;
  appSecret?: string;
  companyName?: string;
  tenantKey?: string;
  token?: string;
  userCount?: number;
}

/**
 * OK
 */
export type Response = FeishuConfigModel;

const path = '/api/v2/organization/feishu/setting';
const method = 'get';
