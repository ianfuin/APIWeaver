export interface Query {
  /**
   * userId
   */
  userId: string;
}

export interface Path {
  /**
   * usergroupId
   */
  usergroupId: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/usergroup/member/{usergroupId}';
const method = 'delete';
