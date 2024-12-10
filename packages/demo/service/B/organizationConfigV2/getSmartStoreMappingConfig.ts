export interface SmartStroeMappingModel {
  allUserGroup?: string;
  childGroup?: string;
  childUser?: string;
  groupList?: string;
  userAccount?: string;
  userGroup?: string;
}

/**
 * OK
 */
export type Response = SmartStroeMappingModel;

const path = '/api/v2/organization/config/getSmartStoreMappingConfig';
const method = 'get';
