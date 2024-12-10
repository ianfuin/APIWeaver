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
export interface CorpWeixinDownstreamConfigModel {
  agentId?: string;
  corpId?: string;
  corpName?: string;
}

/**
 * OK
 */
export type Response = CorpWeixinConfigModel;

const path = '/api/v2/organization/corpweixin/setting';
const method = 'get';
