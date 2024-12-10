export interface OrganizationResultVo {
  hasSign?: boolean;
  isAuthAdmin?: boolean;
  isInvitedUser?: boolean;
  isOganizationAdmin?: boolean;
  oganization?: OrganizationDO;
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

/**
 * OK
 */
export type Response = OrganizationResultVo;

const path = '/api/v2/organization';
const method = 'get';
