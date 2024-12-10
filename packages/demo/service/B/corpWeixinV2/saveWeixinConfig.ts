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

export type Body = CorpWeixinConfigModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/organization/corpweixin/setting/save';
const method = 'post';
