export interface ChannelTask {
  channelId?: string;
  channelType?:
    | 'WEBHOOKS'
    | 'DINGTALK_GROUP_BOT'
    | 'DINGTALK_WORK_NOTICE'
    | 'CORP_WEIXIN_GROUP_BOT'
    | 'CORP_WEIXIN_WORK_NOTICE';
  context?: ChannelContext;
  errorInfo?: string;
  gmtCreate?: number;
  message?: ChannelMessage;
  stage?: number;
  status?: number;
  taskId?: string;
}
export type ChannelContext = object;
export interface ChannelMessage {
  body?: object;
  createTime?: number;
  creator?: string;
  text?: string;
  version?: number;
}
export interface Query {
  /**
   * channelId
   */
  channelId: string;
}

/**
 * OK
 */
export type Response = ChannelTask[];

const path = '/api/v2/channel/task/list';
const method = 'get';
