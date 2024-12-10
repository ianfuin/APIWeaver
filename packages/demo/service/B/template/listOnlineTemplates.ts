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
   * containOrg
   */
  containOrg?: boolean;
  /**
   * recommend
   */
  recommend?: number;
  /**
   * categoryId
   */
  categoryId?: string;
  /**
   * label
   */
  label?: string;
  /**
   * terminal
   */
  terminal?: string;
}

/**
 * OK
 */
export type Response = TemplateVO[];

const path = '/api/v2/template/listOnline';
const method = 'get';
