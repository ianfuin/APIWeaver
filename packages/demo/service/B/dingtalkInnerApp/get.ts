export interface DingtalkBindingResultModel {
  userId?: string;
  userName?: string;
}

/**
 * OK
 */
export type Response = DingtalkBindingResultModel;

const path = '/api/v2/organization/dingtalkInnerApp/bindingInfo';
const method = 'get';
