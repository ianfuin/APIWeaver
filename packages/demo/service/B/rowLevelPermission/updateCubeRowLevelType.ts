export interface Path {
  /**
   * cubeId
   */
  cubeId: string;
  /**
   * rowLevelType
   */
  rowLevelType: number;
}

/**
 * OK
 */
export type Response = boolean;

const path =
  '/restapi/rowlevelpermission/cube/{cubeId}/rowLevelType/{rowLevelType}';
const method = 'put';
