export interface MailModel {
  appendixConfigList?: AppendixConfig[];
  attachLink?: boolean;
  attachScreenshot?: boolean;
  bizMode?: number;
  bizOwner?: string;
  bizOwnerName?: string;
  bottomContent?: BottomContent;
  cronExpression?: string;
  customMail?: CustomMail;
  dashboardId?: string;
  dashboardName?: string;
  globalParam?: object;
  gmtCreate?: string;
  gmtModified?: string;
  lastExecTime?: string;
  mailHead?: string;
  mailId?: string;
  mailMode?: number;
  mailResolution?: number;
  mailStart?: string;
  mailSubject?: string;
  mailTail?: string;
  mergeImage?: boolean;
  modifier?: string;
  paused?: boolean;
  receiverGroups?: string[];
  receiverNames?: string[];
  receivers?: string[];
  receiversForShow?: MailReceiverModel;
  screenWidth?: number;
  sendType?: string;
  status?: string;
  subscribeName?: string;
  timeDisplay?: MailTimeDisplayDO;
  view?: string;
  webhook?: WebHookDO[];
  workType?: string;
  workspaceId?: string;
}
export interface AppendixConfig {
  config?: Config;
  open?: boolean;
  type?: string;
}
export interface BottomContent {
  microApp?: boolean;
  showDashBoard?: boolean;
  unsubscribe?: boolean;
}
export interface CustomMail {
  auth?: boolean;
  encryptMode?: string;
  host?: string;
  nickname?: string;
  password?: string;
  port?: string;
  protocol?: string;
  useCustomEmail?: boolean;
  username?: string;
}
export interface MailReceiverModel {
  userGroupMailReceiver?: object;
  userMailReceiver?: object;
}
export interface MailTimeDisplayDO {
  status?: string;
  timeUnit?: string;
  timeValue?: number;
  view?: boolean;
}
export interface WebHookDO {
  dingWebhook?: string;
  feishuWebhookUrl?: string;
  secret?: string;
  weixinWebhookUrl?: string;
}

export type Body = MailModel[];

/**
 * OK
 */
export type Response = MailModel;

const path = '/restapi/mail/merge';
const method = 'post';
