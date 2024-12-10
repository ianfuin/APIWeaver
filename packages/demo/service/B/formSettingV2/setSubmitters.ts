export interface FormSubmitterModel {
  authType?: string;
  expired?: string;
  formId?: string;
  shareDelete?: number;
  shareInsert?: number;
  shareRead?: number;
  shareType?: number;
  shareUpdate?: number;
  submitterIds?: string;
}
export interface Query {
  /**
   * workspaceId
   */
  workspaceId: string;
}

export interface Path {
  /**
   * formId
   */
  formId: string;
}
export type Body = FormSubmitterModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/form/{formId}/submitter';
const method = 'post';
