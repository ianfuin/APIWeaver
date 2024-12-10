export interface AccessTicketModel {
  cmptId?: string;
  globalParam?: string;
  invalidTime?: number;
  ticketNum?: number;
  userId?: string;
  watermarkParam?: string;
  worksId?: string;
}

export type Body = AccessTicketModel;

/**
 * OK
 */
export type Response = string;

const path = '/api/v2/embed/ticket/create';
const method = 'post';
