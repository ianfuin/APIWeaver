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
export type Response = object;

const path = '/restapi/mail/kill';
const method = 'post';
