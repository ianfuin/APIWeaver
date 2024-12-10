export interface CommentModel {
  atUsers?: CommentUserModel[];
  author?: CommentUserModel;
  commentId?: string;
  commentType?: number;
  componentId?: string;
  content?: string;
  createAt?: number;
  imgIds?: string[];
  isDelete?: number;
  pageId?: string;
  subCommentCount?: number;
  subComments?: CommentModel[];
}
export interface CommentUserModel {
  avatar?: string;
  avatarType?: string;
  nick?: string;
  title?: string;
  userId?: string;
  userType?: number;
}

export interface Path {
  /**
   * commentId
   */
  commentId: string;
}

/**
 * OK
 */
export type Response = CommentModel;

const path = '/api/v2/comment/{commentId}/detail';
const method = 'get';
