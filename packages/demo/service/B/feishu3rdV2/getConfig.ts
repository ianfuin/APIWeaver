export interface Feishu3RdConfigModel {
  appId?: string;
  companyName?: string;
  displayId?: string;
  qrCode?: string;
  tenantKey?: string;
  userCount?: number;
}

/**
 * OK
 */
export type Response = Feishu3RdConfigModel;

const path = '/api/v2/organization/feishu3rd/setting';
const method = 'get';
