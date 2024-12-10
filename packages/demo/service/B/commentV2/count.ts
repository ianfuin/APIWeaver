export interface CommentCountModel {
  componentCountList?: ComponentCountModel[];
  count?: number;
  pageId?: string;
  totalCount?: number;
}
export interface ComponentCountModel {
  componentId?: string;
  count?: number;
}
export interface Query {
  /**
   * menuId
   */
  menuId?: string;
}

export interface Path {
  /**
   * pageId
   */
  pageId: string;
}

/**
 * OK
 */
export type Response = CommentCountModel;

const path = '/api/v2/comment/{pageId}/count';
const method = 'get';
