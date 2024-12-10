export interface Query {
  /**
   * orgId
   */
  orgId: string;
  /**
   * recover
   */
  recover?: boolean;
}

/**
 * OK
 */
export type Response = object;

const path = '/restapi/super/clean/xyz';
const method = 'post';
