export interface TablePartitionModel {
  comment?: string;
  createTime?: string;
  creatorId?: string;
  modifyTime?: string;
  partitionDisplayName?: string;
  partitionId?: string;
  partitionName?: string;
  repositoryId?: string;
  tableId?: string;
}
export interface Query {
  /**
   * dsId
   */
  dsId: string;
}

export interface Path {
  /**
   * tableId
   */
  tableId: string;
}

/**
 * OK
 */
export type Response = TablePartitionModel;

const path = '/api/v2/mix/table/{tableId}/partition';
const method = 'get';
