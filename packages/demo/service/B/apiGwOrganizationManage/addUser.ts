export interface OrganizationUserEvent {
  accountId?: string;
  accountName?: string;
  accountType?: number;
  email?: string;
  isAdmin?: boolean;
  isAuthAdmin?: boolean;
  logicalDelete?: boolean;
  nickname?: string;
  operator?: string;
  organizationId?: string;
  phone?: string;
  roleList?: number[];
  transferUserId?: string;
  userId?: string;
  userType?: number;
  usergroupIds?: string[];
  workspaceRoles?: WorkspaceRoleVo[];
}
export interface WorkspaceRoleVo {
  roleList?: number[];
  worksapceName?: string;
  workspaceId?: string;
}

export type Body = OrganizationUserEvent;

/**
 * OK
 */
export type Response = boolean;

const path = '/restapi/openAPI/organizationManage/organizationUser/add';
const method = 'post';
