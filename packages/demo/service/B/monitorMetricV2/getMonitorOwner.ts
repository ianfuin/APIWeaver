export interface UserDTO {
  nickName?: string;
  userId?: string;
}
export interface Query {
  /**
   * workspaceId
   */
  workspaceId?: string;
  /**
   * worksId
   */
  worksId?: string;
}

/**
 * OK
 */
export type Response = UserDTO[];

const path = '/api/v2/monitor/metric/monitorOwner';
const method = 'get';
