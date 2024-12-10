export interface Query {
  /**
   * dataLevelType
   */
  dataLevelType: string;
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

const path = '/api/v2/datalevel/{cubeId}/whitelist';
const method = 'get';
