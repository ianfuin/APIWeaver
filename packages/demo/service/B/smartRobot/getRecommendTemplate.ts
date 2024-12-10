export interface Query {
  /**
   * robotId
   */
  robotId?: string;
}

/**
 * OK
 */
export type Response = string;

const path = '/api/v2/smart/robot/recommend/template';
const method = 'get';
