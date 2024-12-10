export interface TemplateModel {
  category?: string;
  categoryId?: string;
  comment?: string;
  defaultView?: 'PC_VIEW' | 'MOBILE_VIEW' | 'IPAD_VIEW';
  demoCenter?: number;
  imageType?: string;
  imageUrl?: string;
  labels?: string[];
  name?: string;
  previewImageType?: string;
  previewImageUrl?: string;
  previewType?: number;
  resourceId?: string;
  targetOrganization?: string;
  templateId?: string;
  templateTypes?: string;
  views?: ('PC_VIEW' | 'MOBILE_VIEW' | 'IPAD_VIEW')[];
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

export type Body = TemplateModel;

/**
 * OK
 */
export type Response = TemplateVO;

const path = '/api/v2/template/save';
const method = 'post';
