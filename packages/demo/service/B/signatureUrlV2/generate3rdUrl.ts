export interface SignatureModel {
  expire?: number;
  id?: string;
  linkJump?: boolean;
  param?: string;
  userId?: string;
  withHost?: boolean;
}

export type Body = SignatureModel;

/**
 * OK
 */
export type Response = string;

const path = '/api/v2/3rd/url';
const method = 'post';
