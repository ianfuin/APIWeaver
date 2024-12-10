export interface TemplateCategoryModel {
  categoryName?: string;
  parentCategoryId?: string;
  queryTotal?: boolean;
}

export interface Path {
  /**
   * 分类id
   */
  categoryId?: string;
}
export type Body = TemplateCategoryModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/template/category/{categoryId}';
const method = 'put';
