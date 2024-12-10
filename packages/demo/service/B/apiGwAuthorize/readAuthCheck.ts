export interface Query {
  /**
   * resourceId
   */
  resourceId: string;
  /**
   * resourceType
   */
  resourceType: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/restapi/apigw/authorize/check';
const method = 'get';
