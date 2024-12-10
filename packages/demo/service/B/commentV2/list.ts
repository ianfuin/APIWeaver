export interface CommentListRequestModel {
  componentId?: string;
  cursor?: number;
  pageId?: string;
  pageSize?: number;
  queryType?: number;
}
export interface PaginatedValCommentModel {
  data?: CommentModel[];
  next?: number;
  orderBy?: OrderBy[];
  orderString?: string;
  pageNum?: number;
  pageSize?: number;
  pre?: number;
  start?: number;
  totalNum?: number;
  totalPages?: number;
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
export interface OrderBy {
  order?: string;
  orderBy?: string;
}
export interface Query {
  /**
   * menuId
   */
  menuId?: string;
}

export type Body = CommentListRequestModel;

/**
 * OK
 */
export type Response = PaginatedValCommentModel;

const path = '/api/v2/comment/list';
const method = 'post';
