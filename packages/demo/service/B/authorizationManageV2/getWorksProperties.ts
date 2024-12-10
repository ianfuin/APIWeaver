export interface Query {
  /**
   * resourceId
   */
  resourceId: string;
  /**
   * worksType
   */
  worksType: string;
}

/**
 * OK
 */
export type Response = object;

const path = '/api/v2/authorize/resource/properties';
const method = 'get';
