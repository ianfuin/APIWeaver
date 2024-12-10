export interface WorkspaceOwnerUpdateEvent {
  operator?: string;
  userId?: string;
  workspaceId?: string;
}

export type Body = WorkspaceOwnerUpdateEvent;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/ws/transfer';
const method = 'put';
