export interface Query {
  /**
   * targetWorkspaceId
   */
  targetWorkspaceId: string;
}

/**
 * OK
 */
export type Response = number[];

const path = '/api/v2/role/user';
const method = 'get';
