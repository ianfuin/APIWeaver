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
export interface Query {
  /**
   * 搜索关键字。模板名称
   */
  searchKey?: string;
}

export interface Path {
  /**
   * 分类id
   */
  categoryId?: string;
}

/**
 * OK
 */
export type Response = CategoryTemplateVO[];

const path = '/api/v2/template/category/{categoryId}/templates';
const method = 'get';
