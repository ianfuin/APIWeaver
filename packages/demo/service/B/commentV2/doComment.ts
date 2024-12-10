export interface CommentCreateRequestModel {
  comment?: CommentCreateModel;
  componentId?: string;
  pageId?: string;
  parentCommentId?: string;
}
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
export interface CommentCreateModel {
  atUserIds?: string[];
  content?: string;
  imgIds?: string[];
}
export interface CommentUserModel {
  avatar?: string;
  avatarType?: string;
  nick?: string;
  title?: string;
  userId?: string;
  userType?: number;
}
export interface Query {
  /**
   * menuId
   */
  menuId?: string;
}

export type Body = CommentCreateRequestModel;

/**
 * OK
 */
export type Response = CommentModel;

const path = '/api/v2/comment/doComment';
const method = 'post';
