export interface UserDTO {
  nickName?: string;
  userId?: string;
}
export interface Query {
  /**
   * targetWorkspaceId
   */
  targetWorkspaceId: string;
}

/**
 * OK
 */
export type Response = UserDTO[];

const path = '/api/v2/workspaceUser/adminList';
const method = 'get';
