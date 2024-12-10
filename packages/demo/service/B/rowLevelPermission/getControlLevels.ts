export interface Path {
  /**
   * 数据集id
   */
  cubeId?: string;
}

/**
 * OK
 */
export type Response = object[];

const path = '/restapi/rowlevelpermission/cube/{cubeId}/control/levels/get';
const method = 'get';
