export interface ContactStateModel {
  gmtCreate?: string;
  mobileType?: string;
  nowNub?: number;
  state?: 'EMPTY' | 'DOING' | 'COMPLETED';
  sumNub?: number;
  taskId?: string;
}

/**
 * OK
 */
export type Response = ContactStateModel;

const path = '/api/v2/organization/dingtalk/contactState';
const method = 'get';
