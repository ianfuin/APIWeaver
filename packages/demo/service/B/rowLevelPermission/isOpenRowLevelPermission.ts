export interface Path {
  /**
   * 数据集id
   */
  cubeId?: string;
  /**
   * 是否开启
   */
  isOpen?: boolean;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/restapi/rowlevelpermission/cube/{cubeId}/isOpen/{isOpen}';
const method = 'post';
