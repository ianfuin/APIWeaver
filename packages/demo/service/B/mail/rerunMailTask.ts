export interface MailTaskRerunParam {
  bizDate?: string;
  endTime?: string;
  mailIds?: string[];
  organizationIds?: string[];
  skipExistTask?: boolean;
  startTime?: string;
}

export type Body = MailTaskRerunParam;

/**
 * OK
 */
export type Response = object;

const path = '/restapi/mail/rerunMailTask';
const method = 'post';
