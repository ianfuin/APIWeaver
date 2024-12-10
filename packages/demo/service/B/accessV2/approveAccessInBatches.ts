export interface ApproveInBatchesEvent {
  applicationIds?: string[];
  handleReason?: string;
  resourceWorkspaceIdMap?: object;
  status?: number;
}

export type Body = ApproveInBatchesEvent;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/access/approve/accessInBatches';
const method = 'post';
