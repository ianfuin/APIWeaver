export interface Feishu3RdConfigModel {
  appId?: string;
  companyName?: string;
  displayId?: string;
  qrCode?: string;
  tenantKey?: string;
  userCount?: number;
}

export type Body = Feishu3RdConfigModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/organization/feishu3rd/setting/save';
const method = 'post';
