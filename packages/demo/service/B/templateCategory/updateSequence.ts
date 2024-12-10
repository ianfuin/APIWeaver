export interface CategoryTemplateMoveModel {
  /**
   * 源分类Id
   */
  sourceCategoryId?: string;
  /**
   * 目标分类Id
   */
  targetCategoryId?: string;
  /**
   * 若是移动到别的分类， 则该值为空。若移动到顶部，则值为-1
   */
  targetTemplateId?: string;
  /**
   * 需要移动的模板Id
   */
  templateIdList?: string[];
}

export type Body = CategoryTemplateMoveModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/template/category/templates/move';
const method = 'put';
