export interface Query {
  /**
   * mailId
   */
  mailId: string;
  /**
   * logDate
   */
  logDate: string;
}

/**
 * OK
 */
export type Response = object;

const path = '/restapi/mail/queryMailLog';
const method = 'get';
