export interface Query {
  /**
   * cubeId
   */
  cubeId: string;
  /**
   * attrId
   */
  attrId: string;
  /**
   * values
   */
  values: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/admin/dataset/rhfv';
const method = 'get';
