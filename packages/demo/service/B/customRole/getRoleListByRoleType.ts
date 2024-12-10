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
   * roleType
   */
  roleType?: number;
  /**
   * workspaceId
   */
  workspaceId?: string;
}

/**
 * OK
 */
export type Response = CustomRoleModel[];

const path = '/api/v2/customRole/getRoleListByRoleType';
const method = 'get';
