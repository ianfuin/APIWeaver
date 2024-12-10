export interface MailExecutionModel {
  bizdate?: string;
  content?: string;
  mailId?: string;
  receiverGroups?: string[];
  receivers?: string[];
  subject?: string;
}

export type Body = MailExecutionModel;

/**
 * OK
 */
export type Response = object;

const path = '/restapi/mail/execute';
const method = 'post';
