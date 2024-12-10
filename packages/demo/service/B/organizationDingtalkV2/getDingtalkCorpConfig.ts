export interface DingtalkCorpInfoModel {
  agentId?: number;
  companyName?: string;
  corpId?: string;
  qrCode?: string;
  userCount?: number;
}

/**
 * OK
 */
export type Response = DingtalkCorpInfoModel;

const path = '/api/v2/organization/dingtalk/getDingtalkCorpConfig';
const method = 'get';
