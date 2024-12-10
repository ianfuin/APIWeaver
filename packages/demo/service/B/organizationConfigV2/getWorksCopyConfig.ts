export interface WorksCopyConfigModel {
  copyOpen?: boolean;
  range?: string[];
}

/**
 * OK
 */
export type Response = WorksCopyConfigModel;

const path = '/api/v2/organization/config/getWorksCopyConfig';
const method = 'get';
