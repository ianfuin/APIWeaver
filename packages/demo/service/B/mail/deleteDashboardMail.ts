export interface MailQueryModel {
  hasPermission?: boolean;
  mailId?: string;
  pageNum?: number;
  pageSize?: number;
  paused?: string;
  receiverId?: string;
  status?: string;
  subscribeName?: string;
  userName?: string;
  workspaceId?: string;
}

export type Body = MailQueryModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/restapi/mail/delete';
const method = 'post';
