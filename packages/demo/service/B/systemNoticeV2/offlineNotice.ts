export interface Query {
  /**
   * id
   */
  id: number;
  /**
   * status
   */
  status: number;
}

/**
 * OK
 */
export type Response = number;

const path = '/api/v2/system/notice/offline';
const method = 'put';
