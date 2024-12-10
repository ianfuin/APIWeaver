export interface Query {
  /**
   * isFolder
   */
  isFolder?: boolean;
  /**
   * newPid
   */
  newPid: string;
  /**
   * typeCode
   */
  typeCode?: string;
}

export interface Path {
  /**
   * resourceId
   */
  resourceId: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/catalog/move/{resourceId}';
const method = 'put';
