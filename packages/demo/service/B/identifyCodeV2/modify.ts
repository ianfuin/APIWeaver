export interface IdentifyCodeModel {
  codeId?: string;
  codeValue?: string;
  creator?: string;
  gmtCreate?: string;
  gmtModified?: string;
  modifier?: string;
  resourceId?: string;
}

export interface Path {
  /**
   * codeId
   */
  codeId: string;
}
export type Body = IdentifyCodeModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/identifyCode/{codeId}';
const method = 'put';
