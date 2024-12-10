export interface Query {
  /**
   * roleId
   */
  roleId: number;
  /**
   * roleType
   */
  roleType: number;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/customRole/delete';
const method = 'delete';
