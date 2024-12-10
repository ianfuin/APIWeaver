export interface RoleConfigModel {
  authConfigMap?: object;
  finalAuthConfig?: string;
  roleDetails?: CustomRoleModel[];
}
export interface CustomRoleModel {
  authConfig?: string;
  gmtCreate?: string;
  gmtModified?: string;
  organizationId?: string;
  roleId?: number;
  roleLevel?: number;
  roleName?: string;
  roleNameEn?: string;
  roleType?: number;
  systemRole?: boolean;
}
export interface Query {
  /**
   * workspaceId
   */
  workspaceId?: string;
}

/**
 * OK
 */
export type Response = RoleConfigModel;

const path = '/api/v2/customRole/currentUserConfig';
const method = 'get';
