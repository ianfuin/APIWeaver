export interface IdentifyCodeModel {
  codeId?: string;
  codeValue?: string;
  creator?: string;
  gmtCreate?: string;
  gmtModified?: string;
  modifier?: string;
  resourceId?: string;
}

export type Body = IdentifyCodeModel;

/**
 * OK
 */
export type Response = string;

const path = '/api/v2/identifyCode/';
const method = 'post';
