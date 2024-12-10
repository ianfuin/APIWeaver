export interface BatchOrgUserStatusEvent {
  isDeleted?: boolean;
  operator?: string;
  organizationId?: string;
  userIds?: string[];
}

export type Body = BatchOrgUserStatusEvent;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/organizationUser/batchSetUsersStatus';
const method = 'put';
