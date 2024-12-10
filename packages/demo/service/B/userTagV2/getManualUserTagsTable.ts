export interface UserTagTableModel {
  headItem?: UserTagMetaModel[];
  totalNum?: number;
  valueItem?: UserTagRowModel[];
}
export interface UserTagMetaModel {
  tagDescription?: string;
  tagId?: string;
  tagName?: string;
  tagRelatedColumn?: string;
  tagRelatedConfig?: string;
  tagType?: number;
}
export interface UserTagRowModel {
  accountName?: string;
  nickName?: string;
  tagValues?: UserTagValueModel[];
  userId?: string;
}
export interface Query {
  /**
   * keyword
   */
  keyword?: string;
  /**
   * userType
   */
  userType?: number;
  /**
   * pageNum
   */
  pageNum?: number;
  /**
   * pageSize
   */
  pageSize?: number;
}

/**
 * OK
 */
export type Response = UserTagTableModel;

const path = '/api/v2/usertag/table';
const method = 'get';
