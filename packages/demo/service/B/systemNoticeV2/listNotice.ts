export interface SystemNoticeModel {
  backgroundImg?: string;
  canClose?: number;
  content?: string;
  endTime?: string;
  gmtCreated?: string;
  gmtModified?: string;
  id?: number;
  level?: number;
  linkTips?: string;
  messageCreator?: string;
  messageUpdater?: string;
  noticeType?: number;
  noticeUrl?: string;
  organization?: string;
  startTime?: string;
  status?: number;
}
export interface Query {
  /**
   * status
   */
  status?: number;
  /**
   * content
   */
  content?: string;
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
export type Response = SystemNoticeModel[];

const path = '/api/v2/system/notice/list';
const method = 'get';
