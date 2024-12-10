export interface ContactStateModel {
  gmtCreate?: string;
  mobileType?: string;
  nowNub?: number;
  state?: 'EMPTY' | 'DOING' | 'COMPLETED';
  sumNub?: number;
  taskId?: string;
}

export interface Path {
  /**
   * mobileType
   */
  mobileType: string;
}

/**
 * OK
 */
export type Response = ContactStateModel;

const path = '/api/v2/organization/mobile/contactState/{mobileType}';
const method = 'get';
