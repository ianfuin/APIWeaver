export interface Query {
  /**
   * orgIds
   */
  orgIds: string;
  /**
   * grayVersion
   */
  grayVersion: number;
}

/**
 * OK
 */
export type Response = object;

const path = '/restapi/super/setBatchOrgsGray';
const method = 'post';
