export type FileTransferModel = any;
export interface Query {
  /**
   * workspaceId
   */
  workspaceId: string;
}

export type Body = FileTransferModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/mix/datafile/transfer';
const method = 'post';
