export interface Query {
  /**
   * workspaceId
   */
  workspaceId: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/dataset/useComment';
const method = 'get';
