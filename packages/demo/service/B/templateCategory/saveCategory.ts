export interface TemplateCategoryModel {
  categoryName?: string;
  parentCategoryId?: string;
  queryTotal?: boolean;
}

export type Body = TemplateCategoryModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/template/category';
const method = 'post';
