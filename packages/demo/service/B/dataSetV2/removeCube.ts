export interface Query {
  /**
   * workspaceId
   */
  workspaceId: string;
}

export interface Path {
  /**
   * cubeId
   */
  cubeId: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/dataset/delete/{cubeId}';
const method = 'delete';
