export interface ImportTemplateResourceModel {
  platform?: string;
  targetUserBaseIds?: string[];
  templateId?: string;
}

export type Body = ImportTemplateResourceModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/template/importResource';
const method = 'post';
