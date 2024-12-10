export interface AccessConfigModel {
  accessInnerChannelSwitch?: boolean;
  allowApplySwitch?: boolean;
  customAccessChannelId?: string;
  customAccessChannelSwitch?: boolean;
  dataLevelAllowApply?: boolean;
  defaultApprover?: string;
  dingtalkOaAccessSwitch?: boolean;
  feishuOaAccessSwitch?: boolean;
  treeAllowApply?: boolean;
  weixinOaAccessSwitch?: boolean;
}

export type Body = AccessConfigModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/access/config/save';
const method = 'post';
