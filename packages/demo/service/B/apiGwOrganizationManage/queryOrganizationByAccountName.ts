export interface OrganizationDO {
  createUser?: string;
  gmtCreate?: string;
  gmtModified?: string;
  grayVersion?: number;
  id?: number;
  modifyUser?: string;
  organizationComment?: string;
  organizationId?: string;
  organizationName?: string;
  owner?: string;
  ownerAccountName?: string;
  status?: number;
}

export interface Path {
  /**
   * accountName
   */
  accountName: string;
}

/**
 * OK
 */
export type Response = OrganizationDO;

const path =
  '/restapi/openAPI/organizationManage/organization/info/{accountName}';
const method = 'get';
