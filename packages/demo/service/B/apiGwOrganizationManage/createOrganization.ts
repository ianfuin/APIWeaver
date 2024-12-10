export interface OrganizationCreateEvent {
  organizationComment?: string;
  organizationId?: string;
  organizationName?: string;
  owner?: string;
  ownerAccountName?: string;
}
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

export type Body = OrganizationCreateEvent;

/**
 * OK
 */
export type Response = OrganizationDO;

const path = '/restapi/openAPI/organizationManage/organization/create';
const method = 'post';