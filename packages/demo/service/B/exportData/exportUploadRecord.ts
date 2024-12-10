export interface Query {
  /**
   * uploadId
   */
  uploadId: number;
}

export interface Path {
  /**
   * formId
   */
  formId: string;
}

const path = '/api/v2/exportData/{formId}/exportUpload';
const method = 'get';
