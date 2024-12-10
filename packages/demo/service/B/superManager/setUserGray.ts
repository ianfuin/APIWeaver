export interface Query {
  /**
   * baseId
   */
  baseId: string;
  /**
   * userGrayVersion
   */
  userGrayVersion: number;
}

/**
 * OK
 */
export type Response = object;

const path = '/restapi/super/setUserGray';
const method = 'post';
