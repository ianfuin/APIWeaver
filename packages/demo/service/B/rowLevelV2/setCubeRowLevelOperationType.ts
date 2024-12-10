export interface Path {
  /**
   * cubeId
   */
  cubeId: string;
  /**
   * operationType
   */
  operationType: number;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/rowlevel/{cubeId}/operation/{operationType}';
const method = 'put';
