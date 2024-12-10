export interface OCPConfigModel {
  defaultTakeUsergroupConfig?: boolean;
  icode?: string;
  icodeKey?: string;
  readTimeOut?: number;
  url?: string;
}

export type Body = OCPConfigModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/workspublish/export/ocp/config';
const method = 'post';
