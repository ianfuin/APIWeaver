export interface Path {
  /**
   * 分类id
   */
  categoryId?: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/template/category/{categoryId}';
const method = 'delete';
