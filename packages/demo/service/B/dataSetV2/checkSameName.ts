export interface Query {
  /**
   * cubeId
   */
  cubeId?: string;
  /**
   * workspaceId
   */
  workspaceId: string;
  /**
   * showName
   */
  showName: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/dataset/checkSameName';
const method = 'get';
