export interface OaTemplateModel {
  channelType?: string;
  templateId?: string;
}
export interface OaTemplateVoModel {
  systemCreate?: boolean;
  templateId?: string;
  templateName?: string;
  templateType?: number;
}

export type Body = OaTemplateModel;

/**
 * OK
 */
export type Response = OaTemplateVoModel;

const path = '/api/v2/access/config/template/createOrValid';
const method = 'post';
