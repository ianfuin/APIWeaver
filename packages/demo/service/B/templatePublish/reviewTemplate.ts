export interface ReviewTemplateModel {
  reviewComment?: string;
  reviewResult?: boolean;
}

export interface Path {
  /**
   * templateId
   */
  templateId: string;
}
export type Body = ReviewTemplateModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/template/{templateId}/reviewTemplate';
const method = 'put';
