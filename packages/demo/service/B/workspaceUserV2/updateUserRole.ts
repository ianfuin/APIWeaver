export interface UserRoleEvent {
  roleIds?: number[];
  userId?: string;
  workspaceId?: string;
}

export type Body = UserRoleEvent;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/workspaceUser/modifyRole';
const method = 'put';
