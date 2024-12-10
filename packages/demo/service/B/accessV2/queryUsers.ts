export interface UserDTO {
  nickName?: string;
  userId?: string;
}
export interface Query {
  /**
   * keyword
   */
  keyword?: string;
  /**
   * pageNum
   */
  pageNum?: number;
  /**
   * pageSize
   */
  pageSize?: number;
}

/**
 * OK
 */
export type Response = UserDTO[];

const path = '/api/v2/access/users';
const method = 'get';
