export interface TemplateCategoryVO {
  categoryId?: string;
  categoryName?: string;
  children?: TemplateCategoryVO[];
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  parentCategoryId?: string;
  recommend?: number;
  serialNum?: number;
  templateTotal?: number;
  templates?: TemplateVO[];
}
export interface TemplateVO {
  category?: string;
  categoryId?: string;
  comment?: string;
  creatorId?: string;
  creatorName?: string;
  defaultView?: string;
  demoCenter?: number;
  demoMobileCenter?: number;
  famous?: boolean;
  imageType?: string;
  imageUrl?: string;
  labels?: string[];
  modifiedDate?: string;
  modifiedId?: string;
  modifiedName?: string;
  name?: string;
  previewCount?: number;
  previewImageType?: string;
  previewImageUrl?: string;
  previewType?: number;
  publishScope?: number;
  recent?: boolean;
  resourceAccessUrl?: string;
  resourceId?: string;
  resourceName?: string;
  resourceType?: string;
  resourceWorkspaceId?: string;
  resourceWorkspaceName?: string;
  reviewComment?: string;
  serialNum?: number;
  srcResourceId?: string;
  status?: number;
  submitCount?: number;
  targetOrganization?: string;
  templateId?: string;
  templateType?: number;
  templateTypes?: string;
  views?: string;
}
export interface Query {
  /**
   * resourceType
   */
  resourceType?: string;
  /**
   * keyword
   */
  keyword?: string;
  /**
   * recommend
   */
  recommend?: number;
  /**
   * label
   */
  label?: string;
  /**
   * removeEmpty
   */
  removeEmpty?: boolean;
  /**
   * terminal
   */
  terminal?: string;
}

/**
 * OK
 */
export type Response = TemplateCategoryVO[];

const path = '/api/v2/template/nl/listAssemble';
const method = 'get';