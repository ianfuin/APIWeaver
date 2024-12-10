export interface Query {
  /**
   * fromScheduler
   */
  fromScheduler?: boolean;
  /**
   * include
   */
  include?: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/system/param/refresh';
const method = 'post';
