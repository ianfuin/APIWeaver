export interface Query {
  /**
   * pageId
   */
  pageId: string;
  /**
   * uniQuePicId
   */
  uniQuePicId: string;
}

/**
 * OK
 */
export type Response = object;

const path = '/api/v2/image/singleDisplay';
const method = 'get';
