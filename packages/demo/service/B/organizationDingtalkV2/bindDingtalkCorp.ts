export interface DingtalkCorpInfoModel {
  agentId?: number;
  companyName?: string;
  corpId?: string;
  qrCode?: string;
  userCount?: number;
}

export type Body = DingtalkCorpInfoModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/organization/dingtalk/bindCorp';
const method = 'post';
