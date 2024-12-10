export interface WorkspaceSharedUserModel {
  nickname?: string;
  userId?: string;
  worksId?: string;
}
export interface Query {
  /**
   * id
   */
  id: string;
  /**
   * workspaceId
   */
  workspaceId: string;
}

/**
 * OK
 */
export type Response = WorkspaceSharedUserModel[];

const path = '/api/v2/shared/listApprover';
const method = 'get';
