export interface Query {
  /**
   * organizationId
   */
  organizationId: string;
}

/**
 * OK
 */
export type Response = number;

const path = '/api/v2/datalevel/transfer/rollback';
const method = 'post';
