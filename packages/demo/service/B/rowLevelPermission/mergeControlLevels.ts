export interface Path {
  /**
   * 数据集id
   */
  cubeId?: string;
}
export type Body = string[];

/**
 * OK
 */
export type Response = boolean;

const path = '/restapi/rowlevelpermission/cube/{cubeId}/control/levels/merge';
const method = 'post';
