export interface Path {
  /**
   * workspaceId
   */
  workspaceId: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/ws/{workspaceId}';
const method = 'delete';
