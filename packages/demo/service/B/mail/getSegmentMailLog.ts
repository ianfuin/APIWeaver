export interface MailLogQueryModel {
  beginDate?: string;
  endDate?: string;
  hasPermission?: boolean;
  mailId?: string;
  offset?: number;
  pageNum?: number;
  pageSize?: number;
  paused?: string;
  sendStatus?: string;
  subscribeName?: string;
  taskId?: string;
  userName?: string;
}

export type Body = MailLogQueryModel;

/**
 * OK
 */
export type Response = object;

const path = '/restapi/mail/getSegmentMailLog';
const method = 'post';
