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

export type Body = SystemNoticeModel;

/**
 * OK
 */
export type Response = number;

const path = '/api/v2/system/notice/modify';
const method = 'put';
