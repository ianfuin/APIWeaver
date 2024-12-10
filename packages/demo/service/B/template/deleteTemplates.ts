export interface DeleteTemplateModel {
  templateIds?: string[];
}

export type Body = DeleteTemplateModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/template/removeTemplates';
const method = 'post';
