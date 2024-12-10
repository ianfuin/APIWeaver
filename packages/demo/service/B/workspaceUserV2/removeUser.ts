export interface Query {
  /**
   * userId
   */
  userId: string;
  /**
   * newOwnerId
   */
  newOwnerId: string;
}

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

const path = '/api/v2/workspaceUser/{workspaceId}';
const method = 'delete';
