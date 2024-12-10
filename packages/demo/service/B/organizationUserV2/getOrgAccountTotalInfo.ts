export interface OrgUserNumInfoModel {
  activedNum?: number;
  analysisInfo?: NumInfoModel;
  developerInfo?: NumInfoModel;
  inactiveNum?: number;
  licenseNum?: number;
  totalNum?: number;
  visitorInfo?: NumInfoModel;
}
export interface NumInfoModel {
  activedNum?: number;
  inactiveNum?: number;
  licenseNum?: number;
  totalNum?: number;
}

/**
 * OK
 */
export type Response = OrgUserNumInfoModel;

const path = '/api/v2/organizationUser/totalInfo';
const method = 'get';
