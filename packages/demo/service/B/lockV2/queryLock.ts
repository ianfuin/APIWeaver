export interface UserDTO {
  nickName?: string;
  userId?: string;
}
export interface Query {
  /**
   * accupyIfNone
   */
  accupyIfNone?: boolean;
}

export interface Path {
  /**
   * workType
   */
  workType: string;
  /**
   * workId
   */
  workId: string;
}

/**
 * OK
 */
export type Response = UserDTO;

const path = '/api/v2/lock/{workType}/{workId}';
const method = 'get';
