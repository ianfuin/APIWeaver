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

const path = '/restapi/apigw/v1/access/myApproveList';
const method = 'get';
