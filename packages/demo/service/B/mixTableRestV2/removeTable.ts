export interface Query {
  /**
   * dsId
   */
  dsId: string;
  /**
   * forceRemove
   */
  forceRemove: boolean;
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
export type Response = boolean;

const path = '/api/v2/mix/table/{tableId}';
const method = 'delete';
