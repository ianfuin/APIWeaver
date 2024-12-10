export interface OrganizationUserOwnerDO {
  organizationId?: string;
  organizationName?: string;
  owner?: string;
  ownerId?: string;
}
export interface Query {
  /**
   * ownerName
   */
  ownerName?: string;
}

/**
 * OK
 */
export type Response = OrganizationUserOwnerDO[];

const path = '/api/v2/organization/findAll';
const method = 'get';
