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

export type Body = CustomRoleModel;

/**
 * OK
 */
export type Response = CustomRoleModel;

const path = '/api/v2/customRole/save';
const method = 'post';
