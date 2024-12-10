export interface Query {
  /**
   * oldTicket
   */
  oldTicket: string;
  /**
   * newWorksId
   */
  newWorksId: string;
  /**
   * globalParam
   */
  globalParam: string;
}

/**
 * OK
 */
export type Response = string;

const path = '/api/v2/embed/genTicket4Jump';
const method = 'get';
