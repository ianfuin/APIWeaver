export interface Query {
  /**
   * workspaceId
   */
  workspaceId: string;
}

export interface Path {
  /**
   * type
   */
  type: string;
}

/**
 * OK
 */
export type Response = object;

const path = '/restapi/tree/{type}';
const method = 'get';
