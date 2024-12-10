export interface DsStatusEvent {
  sid?: string;
  status?: number;
}

export type Body = DsStatusEvent;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/dataservice/status';
const method = 'put';
