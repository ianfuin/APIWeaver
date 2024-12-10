export interface Path {
  /**
   * submissionId
   */
  submissionId: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/form/submitter/{submissionId}';
const method = 'delete';
