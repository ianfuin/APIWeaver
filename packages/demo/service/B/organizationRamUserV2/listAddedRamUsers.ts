export interface RamUserModel {
  displayName?: string;
  localOrgAccount?: boolean;
  userId?: string;
  userPrincipalName?: string;
}

/**
 * OK
 */
export type Response = RamUserModel[];

const path = '/api/v2/organizationUser/ram/added/list';
const method = 'get';
