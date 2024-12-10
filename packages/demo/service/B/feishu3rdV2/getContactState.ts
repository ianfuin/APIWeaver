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

const path = '/api/v2/organization/feishu3rd/contactState';
const method = 'get';
