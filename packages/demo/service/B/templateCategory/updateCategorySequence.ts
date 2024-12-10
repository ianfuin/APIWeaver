export interface TemplateCategoryDO {
  categoryId?: string;
  categoryName?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  parentCategoryId?: string;
  recommend?: number;
  serialNum?: number;
  templateTotal?: number;
  templates?: TemplateDO[];
}
export interface TemplateDO {
  category?: string;
  categoryId?: string;
  comment?: string;
  createUser?: string;
  defaultView?: string;
  demoCenter?: number;
  demoMobileCenter?: number;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  imageType?: string;
  imageUrl?: string;
  labels?: string[];
  modifyUser?: string;
  name?: string;
  onlineId?: number;
  organizationId?: string;
  previewImageType?: string;
  previewImageUrl?: string;
  previewType?: number;
  publishScope?: number;
  recent?: boolean;
  resourceId?: string;
  resourceType?: string;
  resourceWorkspaceId?: string;
  reviewComment?: string;
  serialNum?: number;
  srcResourceId?: string;
  status?: number;
  targetOrganization?: string;
  templateId?: string;
  templateType?: number;
  templateTypes?: string;
  views?: string;
  workspaceName?: string;
}

export type Body = TemplateCategoryDO[];

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/template/category/sequenceV2';
const method = 'put';
