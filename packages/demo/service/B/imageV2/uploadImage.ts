export type ImageFileBO = any;
export interface ImageBO {
  fileId?: string;
  uniquePicId?: string;
  url?: string;
}

export type Body = ImageFileBO;

/**
 * OK
 */
export type Response = ImageBO;

const path = '/api/v2/image/upload';
const method = 'post';
