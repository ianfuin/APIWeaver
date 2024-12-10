export interface DsTransferEvent {
  sid?: string;
  userId?: string;
}

export type Body = DsTransferEvent;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/dataservice/transfer';
const method = 'put';
