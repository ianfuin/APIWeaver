export interface PaginatedValTemplateVO {
  data?: TemplateVO[];
  next?: number;
  orderBy?: OrderBy[];
  orderString?: string;
  pageNum?: number;
  pageSize?: number;
  pre?: number;
  start?: number;
  totalNum?: number;
  totalPages?: number;
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
export interface OrderBy {
  order?: string;
  orderBy?: string;
}
export interface Query {
  /**
   * resourceType
   */
  resourceType?: string;
  /**
   * status
   */
  status?: number;
  /**
   * hasDemoCenter
   */
  hasDemoCenter?: number;
  /**
   * keyword
   */
  keyword?: string;
  /**
   * isOwner
   */
  isOwner?: boolean;
  /**
   * pageNum
   */
  pageNum?: number;
  /**
   * pageSize
   */
  pageSize?: number;
  /**
   * sortColumn
   */
  sortColumn?: string;
  /**
   * sortType
   */
  sortType?: string;
  /**
   * publishScope
   */
  publishScope?: string;
  /**
   * isSuper
   */
  isSuper?: boolean;
}

/**
 * OK
 */
export type Response = PaginatedValTemplateVO;

const path = '/api/v2/template/listTemplate';
const method = 'get';
