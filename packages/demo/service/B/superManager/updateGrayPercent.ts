export interface Query {
  /**
   * orgType
   */
  orgType: number;
  /**
   * grayPercent
   */
  grayPercent: number;
}

/**
 * OK
 */
export type Response = object;

const path = '/restapi/super/updateGrayPercent';
const method = 'post';
