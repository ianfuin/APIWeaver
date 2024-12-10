export interface ResourceAccessConfigModel {
  approverList?: UserDTO[];
  enableAccess?: number;
}
export interface UserDTO {
  nickName?: string;
  userId?: string;
}
export interface Query {
  /**
   * workspaceId
   */
  workspaceId: string;
  /**
   * resourceId
   */
  resourceId: string;
}

/**
 * OK
 */
export type Response = ResourceAccessConfigModel;

const path = '/api/v2/access/getResourceAccessConfig';
const method = 'get';
