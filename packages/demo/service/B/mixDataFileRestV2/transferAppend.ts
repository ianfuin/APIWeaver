export type FileTransferAppendModel = any;
export interface Query {
  /**
   * workspaceId
   */
  workspaceId: string;
}

export type Body = FileTransferAppendModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/mix/datafile/transferAppend';
const method = 'post';
