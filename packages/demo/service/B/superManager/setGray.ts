export interface Query {
  /**
   * organizationId
   */
  organizationId: string;
  /**
   * grayVersion
   */
  grayVersion: number;
}

/**
 * OK
 */
export type Response = object;

const path = '/restapi/super/setGray';
const method = 'post';
