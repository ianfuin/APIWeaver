export interface OrganizationUsersStatusEvent {
  isDeleted?: boolean;
  operator?: string;
  organizationId?: string;
  userId?: string;
}

export type Body = OrganizationUsersStatusEvent;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/organizationUser/setUsersStatus';
const method = 'put';
