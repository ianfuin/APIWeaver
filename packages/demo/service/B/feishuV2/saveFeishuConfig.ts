export interface FeishuConfigModel {
  aesKey?: string;
  appId?: string;
  appSecret?: string;
  companyName?: string;
  tenantKey?: string;
  token?: string;
  userCount?: number;
}

export type Body = FeishuConfigModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/organization/feishu/setting/save';
const method = 'post';
