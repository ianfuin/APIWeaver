export interface OrganizationUpdateEvent {
  operator?: string;
  organizationComment?: string;
  organizationId?: string;
  organizationName?: string;
  status?: number;
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

export type Body = OrganizationUpdateEvent;

/**
 * OK
 */
export type Response = OrganizationDO;

const path = '/api/v2/organization';
const method = 'put';
