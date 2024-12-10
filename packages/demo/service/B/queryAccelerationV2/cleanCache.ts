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

const path = '/api/v2/acceleration/cube/{cubeId}/cleanCache';
const method = 'delete';