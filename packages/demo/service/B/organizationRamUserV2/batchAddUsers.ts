export interface BatchAddRamUserModel {
  ramUsers?: RamUserModel[];
  roleList?: number[];
  userType?: number;
  usergroupIds?: string[];
}
export interface RamUserModel {
  displayName?: string;
  localOrgAccount?: boolean;
  userId?: string;
  userPrincipalName?: string;
}

export type Body = BatchAddRamUserModel;

/**
 * OK
 */
export type Response = number;

const path = '/api/v2/organizationUser/ram/batchAdd';
const method = 'post';
