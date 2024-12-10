export interface OrganizationModuleAccessPermissionDO {
  description?: string;
  functionKey?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  invalidTime?: string;
  open?: boolean;
  organizationId?: string;
  workspaceType?: number;
}

/**
 * OK
 */
export type Response = OrganizationModuleAccessPermissionDO[];

const path = '/restapi/admin/queryOrgPermission';
const method = 'get';
