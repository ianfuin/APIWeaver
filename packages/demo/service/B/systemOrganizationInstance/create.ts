export interface InstanceCreateModel {
  gmtExpire?: string;
  instanceName?: string;
  maxLicenseNum?: number;
  ownerName?: string;
  password?: string;
}

export type Body = InstanceCreateModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/system/instance/create';
const method = 'post';
