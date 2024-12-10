export interface OCPConfigModel {
  defaultTakeUsergroupConfig?: boolean;
  icode?: string;
  icodeKey?: string;
  readTimeOut?: number;
  url?: string;
}

/**
 * OK
 */
export type Response = OCPConfigModel;

const path = '/api/v2/workspublish/export/ocp/config';
const method = 'get';
