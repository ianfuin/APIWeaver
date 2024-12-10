export interface Path {
  /**
   * productionId
   */
  productionId: string;
}

/**
 * OK
 */
export type Response = object;

const path = '/restapi/apigw/v1/favorite/cancel/{productionId}';
const method = 'post';
