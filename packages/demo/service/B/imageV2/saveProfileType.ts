export interface ImageAvatarBO {
  organizationId?: string;
  type?: string;
  url?: string;
  userId?: string;
}

export type Body = ImageAvatarBO;

const path = '/api/v2/image/uploadProfile';
const method = 'post';
