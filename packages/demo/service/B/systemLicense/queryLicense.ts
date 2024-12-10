export interface LicenseModel {
  bindCode?: string;
  cid?: string;
  createTime?: number;
  expiredTime?: number;
  functionLimit?: object;
  hash?: string;
  hash42?: string;
  licenseId?: string;
  licenseType?: number;
  licenseVersion?: number;
  machineLimit?: object;
  maxAccountNum?: number;
  maxInstanceAccountNum?: number;
  maxInstanceNum?: number;
  maxInstanceTerm?: number;
  modules?: string[];
  solutionType?: number;
  thirdQuota?: number;
  thirdUvQuota?: number;
}

/**
 * OK
 */
export type Response = LicenseModel;

const path = '/api/v2/license/get';
const method = 'get';
