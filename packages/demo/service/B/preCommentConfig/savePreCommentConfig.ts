export interface PreCommentConfigModel {
  commentTemplate?: string;
  open?: boolean;
}

export type Body = PreCommentConfigModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/preComment/savePreCommentConfig';
const method = 'post';
