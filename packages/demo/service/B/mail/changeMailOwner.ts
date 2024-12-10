export interface MailTransferModel {
  mailIds?: string[];
  userId?: string;
}

export type Body = MailTransferModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/restapi/mail/owner';
const method = 'put';
