export interface Query {
  /**
   * cubeId
   */
  cubeId?: string;
  /**
   * robotId
   */
  robotId: string;
}

/**
 * OK
 */
export type Response = object;

const path = '/api/v2/smart/robot/recommend';
const method = 'get';
