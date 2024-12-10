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
  /**
   * partitionId
   */
  partitionId: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/mix/table/{tableId}/partition/{partitionId}';
const method = 'delete';
