export interface ApproveEvent {
  applicationId?: string;
  handleReason?: string;
  status?: number;
}

export type Body = ApproveEvent;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/access/apply/access';
const method = 'post';
