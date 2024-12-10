export interface ImageModel {
  format?: string;
  image?: string;
  name?: string;
}

export type Body = ImageModel;

/**
 * OK
 */
export type Response = string;

const path = '/auth_sso/image/upload';
const method = 'post';
