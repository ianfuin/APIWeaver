export interface Query {
  /**
   * robotId
   */
  robotId: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/smart/robot';
const method = 'delete';
