export interface SystemLicenseModel {
  activatedAccountQuota?: number;
  expireDate?: string;
  functionLimit?: object;
  instanceList?: SystemLicenseInstanceModel[];
  licenseId?: string;
  licenseVersion?: number;
  machineLimit?: object;
  maxAccountNum?: number;
  maxInstanceAccountNum?: number;
  maxInstanceNum?: number;
  solutionType?: number;
  thirdQuota?: number;
  thirdUvQuota?: number;
  type?: number;
  version?: string;
}
export interface SystemLicenseInstanceModel {
  expireDate?: string;
  gmtCreate?: string;
  maxAccountNum?: number;
  organizationId?: string;
  organizationName?: string;
  usedAccountNum?: number;
}

/**
 * OK
 */
export type Response = SystemLicenseModel;

const path = '/api/v2/license/getDetail';
const method = 'get';
