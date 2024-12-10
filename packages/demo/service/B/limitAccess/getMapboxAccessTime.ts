export interface LimitAccessModel {
  allowedAccessTimes?: number;
  currentAccessTimes?: number;
}
export interface Query {
  /**
   * type
   */
  type: string;
}

/**
 * OK
 */
export type Response = LimitAccessModel;

const path = '/api/v2/map/accessTime';
const method = 'get';
