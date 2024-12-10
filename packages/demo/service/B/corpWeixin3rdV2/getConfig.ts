export interface CorpWeixin3RdConfigModel {
  agentId?: string;
  companyName?: string;
  corpId?: string;
  corpName?: string;
  permanentCode?: string;
  providerCorpId?: string;
  qrCode?: string;
  userCount?: number;
}

/**
 * OK
 */
export type Response = CorpWeixin3RdConfigModel;

const path = '/api/v2/organization/corpweixin3rd/setting';
const method = 'get';
