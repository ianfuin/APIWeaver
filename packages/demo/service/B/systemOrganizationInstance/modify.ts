export interface InstanceUpdateModel {
  gmtExpire?: string;
  instanceId?: string;
  instanceName?: string;
  maxLicenseNum?: number;
}

export type Body = InstanceUpdateModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/system/instance/modify';
const method = 'post';
