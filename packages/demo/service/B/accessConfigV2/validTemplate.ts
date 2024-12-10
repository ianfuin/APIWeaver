export interface OaTemplateVoModel {
  systemCreate?: boolean;
  templateId?: string;
  templateName?: string;
  templateType?: number;
}
export interface Query {
  /**
   * templateId
   */
  templateId?: string;
  /**
   * channelType
   */
  channelType: string;
}

/**
 * OK
 */
export type Response = OaTemplateVoModel;

const path = '/api/v2/access/config/template/valid';
const method = 'post';
