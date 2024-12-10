export interface Query {
  /**
   * ticket
   */
  ticket: string;
}

/**
 * OK
 */
export type Response = string;

const path = '/api/v2/embed/param/get';
const method = 'get';
