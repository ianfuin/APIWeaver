export interface BatchUrlBO {
  menuId?: string;
  pageId?: string;
  uniquePicId?: string[];
}
export interface Query {
  /**
   * menuId
   */
  menuId?: string;
}

export type Body = BatchUrlBO;

/**
 * OK
 */
export type Response = object;

const path = '/api/v2/image/batchDisplay';
const method = 'post';
