export interface FormSubmitterVO {
  authType?: string;
  formId?: string;
  shareType?: number;
  submissions?: SubmissionVO[];
}
export interface SubmissionVO {
  authType?: string;
  expired?: string;
  shareDelete?: number;
  shareInsert?: number;
  shareRead?: number;
  shareUpdate?: number;
  showName?: string;
  submissionId?: string;
  submitterId?: string;
}

export interface Path {
  /**
   * formId
   */
  formId: string;
}

/**
 * OK
 */
export type Response = FormSubmitterVO;

const path = '/api/v2/form/{formId}/submitter';
const method = 'get';
