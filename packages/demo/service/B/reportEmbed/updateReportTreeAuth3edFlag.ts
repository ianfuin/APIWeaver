export interface DashboardAuth3RdEvent {
  flag?: boolean;
  treeId?: string;
  treeName?: string;
  workspaceId?: string;
}

export type Body = DashboardAuth3RdEvent;

/**
 * OK
 */
export type Response = number;

const path = '/api/v2/embed/update';
const method = 'put';
