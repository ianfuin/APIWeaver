export interface Query {
  /**
   * status
   */
  status?: number;
}

/**
 * OK
 */
export type Response = object;

const path = '/restapi/apigw/v1/access/myApplyList';
const method = 'get';
