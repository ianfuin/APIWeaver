export interface ExtractionCodeModel {
  changeExtractionCode?: boolean;
  id?: string;
  invalidTime?: string;
  userId?: string;
  workspaceId?: string;
}
export interface ExtractionCodeVO {
  extractionCode?: string;
  id?: string;
  invalidTime?: string;
  publishUrl?: string;
  userName?: string;
}

export type Body = ExtractionCodeModel;

/**
 * OK
 */
export type Response = ExtractionCodeVO;

const path = '/api/v2/extractionCode/publish';
const method = 'post';
