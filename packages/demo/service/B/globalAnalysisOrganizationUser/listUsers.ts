export interface OrganizationUserDO {
  createUser?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  isAdmin?: boolean;
  isAuthAdmin?: boolean;
  isDefault?: number;
  modifyUser?: string;
  nickname?: string;
  organizationId?: string;
  roleList?: string;
  status?: number;
  userId?: string;
  userType?: number;
}

/**
 * OK
 */
export type Response = OrganizationUserDO[];

const path = '/api/v2/globalAnalysis/users';
const method = 'get';
