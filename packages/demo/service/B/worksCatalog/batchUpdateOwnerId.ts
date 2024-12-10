export interface Query {
  /**
   * typeCode
   */
  typeCode?: string;
  /**
   * ownerId
   */
  ownerId: string;
  /**
   * workspaceId
   */
  workspaceId: string;
}

export type Body = string[];

/**
 * OK
 */
export type Response = string[];

const path = '/api/v2/catalog/batchUpdateOwnerId';
const method = 'put';
