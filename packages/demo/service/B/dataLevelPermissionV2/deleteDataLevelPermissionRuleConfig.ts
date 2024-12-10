export interface Query {
  /**
   * ruleId
   */
  ruleId: string;
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

const path = '/api/v2/datalevel/{cubeId}/rule';
const method = 'delete';
