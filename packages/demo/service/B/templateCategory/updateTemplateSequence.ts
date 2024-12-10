export interface CategoryTemplateMoveModelV2 {
  /**
   * 源分类Id
   */
  sourceCategoryId?: string;
  /**
   * 目标分类Id
   */
  targetCategoryId?: string;
  templateIdList?: string[];
  templateList?: CategoryTemplateVO[];
}
export interface CategoryTemplateVO {
  /**
   * 模板分类ID
   */
  categoryId?: string;
  /**
   * 报表创建人ID
   */
  creatorId?: string;
  gmtCreate?: string;
  /**
   * 修改时间
   */
  gmtModified?: string;
  /**
   * 修改人ID
   */
  modifiedId?: string;
  /**
   * 模板名称
   */
  name?: string;
  onlineId?: number;
  /**
   * 资源类型。REPORT; PAGE
   */
  resourceType?: string;
  serialNum?: number;
  /**
   * 模板ID
   */
  templateId?: string;
  /**
   * 模板名称。1：官方模板;2：官方推荐模板;3：普通模板
   */
  templateType?: number;
}

export type Body = CategoryTemplateMoveModelV2;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/template/category/templates/moveV2';
const method = 'put';
