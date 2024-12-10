export interface PreCommentConfigModel {
  commentTemplate?: string;
  open?: boolean;
}

/**
 * OK
 */
export type Response = PreCommentConfigModel;

const path = '/api/v2/preComment/getPreCommentConfig';
const method = 'get';
