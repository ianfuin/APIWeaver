export interface Query {
  /**
   * corpId
   */
  corpId?: string;
  /**
   * isDownstream
   */
  isDownstream?: boolean;
}

/**
 * OK
 */
export type Response = object;

const path = '/api/v2/organization/corpweixin/deptsAndUsers';
const method = 'get';
