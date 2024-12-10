export interface UserDTO {
  nickName?: string;
  userId?: string;
}
export interface Query {
  /**
   * resourceId
   */
  resourceId: string;
  /**
   * resourceType
   */
  resourceType?: string;
}

/**
 * OK
 */
export type Response = UserDTO[];

const path = '/api/v2/access/approvers';
const method = 'get';
