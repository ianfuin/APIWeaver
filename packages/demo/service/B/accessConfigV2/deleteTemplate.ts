export interface OaTemplateModel {
  channelType?: string;
  templateId?: string;
}

export type Body = OaTemplateModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/access/config/template/delete';
const method = 'delete';
