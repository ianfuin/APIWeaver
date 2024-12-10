export interface MobileOrgBindingInfo {
  boundDingtalk?: boolean;
  boundFeishu?: boolean;
  boundWeixin?: boolean;
  dingtalk3rd?: DingtalkCorpInfoModel;
  dingtalkInner?: DingtalkInnerAppConfigModel;
  feishu3rd?: Feishu3RdConfigModel;
  feishuInner?: FeishuConfigModel;
  weixin3rd?: CorpWeixin3RdConfigModel;
  weixinInner?: CorpWeixinConfigModel;
}
export interface DingtalkCorpInfoModel {
  agentId?: number;
  companyName?: string;
  corpId?: string;
  qrCode?: string;
  userCount?: number;
}
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
export interface Feishu3RdConfigModel {
  appId?: string;
  companyName?: string;
  displayId?: string;
  qrCode?: string;
  tenantKey?: string;
  userCount?: number;
}
export interface FeishuConfigModel {
  aesKey?: string;
  appId?: string;
  appSecret?: string;
  companyName?: string;
  tenantKey?: string;
  token?: string;
  userCount?: number;
}
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
export interface CorpWeixinConfigModel {
  aesKey?: string;
  agentId?: string;
  agentSecret?: string;
  companyName?: string;
  corpId?: string;
  downstreamCorpConfigList?: CorpWeixinDownstreamConfigModel[];
  token?: string;
  userCount?: number;
  verifyCode?: string;
}

/**
 * OK
 */
export type Response = MobileOrgBindingInfo;

const path = '/api/v2/organization/mobile/settings';
const method = 'get';
