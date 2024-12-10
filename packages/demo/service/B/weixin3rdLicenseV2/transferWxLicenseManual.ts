export interface WxLicenseInfoModel {
  activatedUsers?: string[];
  existedUsers?: string[];
  illegalOccupiedUsers?: string[];
  instance?: QuickbiInstanceDO;
  nonLicenseUsers?: string[];
  orgId?: string;
  wxConfig?: MobileConfigExpandPO;
}
export interface QuickbiInstanceDO {
  expireDate?: string;
  gmtCreate?: string;
  gmtModified?: string;
  instanceId?: string;
  instanceStatus?:
    | 'RUNNING'
    | 'SOONDUE'
    | 'SOONOWN'
    | 'NOMONEY'
    | 'NOTIME'
    | 'FORCEOFF'
    | 'OPENSUC'
    | 'REFUND'
    | 'DROP';
  instanceVersion?:
    | 'PROBATION'
    | 'STANDARD'
    | 'STANDARD_V2'
    | 'ADVANCED'
    | 'BASIC'
    | 'DELUXE'
    | 'PROFESSIONAL'
    | 'UMENG'
    | 'FUSION_BASIC_VERSION'
    | 'FUSION_STANDARD_VERSION'
    | 'FUSION_ULTIMATE_VERSION'
    | 'IND_DELUXE'
    | 'DELUXE_VERSION'
    | 'FUSION_INDEPENDENT_VERSION'
    | 'SYCM_STANDARD'
    | 'PAAS_SHOP_VERSION'
    | 'SYCM_PAAS_VERSION'
    | 'SYCM_GXT'
    | 'PAAS_SAAS_VERSION'
    | 'DINGTALK_BASIC';
  maxLicenseNum?: number;
  ownerId?: string;
  usedLicenseNum?: number;
}
export interface MobileConfigExpandPO {
  agentId?: string;
  agentSecret?: string;
  companyName?: string;
  corpId?: string;
  dingAgentId?: string;
  fsDisplayId?: string;
  gmtCreate?: string;
  id?: number;
  installFrom?: number;
  platform?: number;
  verifyCode?: string;
  wxOpenCorpId?: string;
}
export interface Query {
  /**
   * orgId
   */
  orgId?: string;
  /**
   * wxOpenCorpId
   */
  wxOpenCorpId?: string;
}

/**
 * OK
 */
export type Response = WxLicenseInfoModel;

const path = '/api/v2/organization/corpweixin3rd/license/transfer/manual';
const method = 'get';
