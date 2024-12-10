export interface Query {
  /**
   * workspaceId
   */
  workspaceId: string;
}

/**
 * OK
 */
export type Response = object;

const path = '/api/v2/smart/robot/table/status';
const method = 'get';
