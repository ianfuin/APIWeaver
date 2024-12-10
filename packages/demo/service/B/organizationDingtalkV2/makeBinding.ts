export interface DingtalkBindingModel {
  dingId?: string;
  userId?: string;
}
export interface DingtalkBindingResultModel {
  userId?: string;
  userName?: string;
}

export type Body = DingtalkBindingModel;

/**
 * OK
 */
export type Response = DingtalkBindingResultModel;

const path = '/api/v2/organization/dingtalk/makeBinding';
const method = 'post';
