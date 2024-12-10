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

export type Body = CorpWeixin3RdConfigModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/organization/corpweixin3rd/setting/save';
const method = 'post';
