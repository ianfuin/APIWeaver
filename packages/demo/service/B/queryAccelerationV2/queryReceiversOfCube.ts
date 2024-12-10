export interface CubeDeveloperVO {
  hasDing?: boolean;
  hasMail?: boolean;
  nickname?: string;
  userId?: string;
}
export interface Query {
  /**
   * cubeId
   */
  cubeId: string;
}

/**
 * OK
 */
export type Response = CubeDeveloperVO[];

const path = '/api/v2/acceleration/queryReceiversOfCube';
const method = 'get';
