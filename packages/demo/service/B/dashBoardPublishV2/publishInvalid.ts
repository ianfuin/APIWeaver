export interface Path {
  /**
   * pageId
   */
  pageId: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/dashboard/{pageId}/publishInvalid';
const method = 'post';
