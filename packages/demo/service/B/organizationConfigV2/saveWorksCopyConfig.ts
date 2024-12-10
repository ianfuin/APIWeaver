export interface WorksCopyConfigModel {
  copyOpen?: boolean;
  range?: string[];
}

export type Body = WorksCopyConfigModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/organization/config/saveWorksCopyConfig';
const method = 'post';
