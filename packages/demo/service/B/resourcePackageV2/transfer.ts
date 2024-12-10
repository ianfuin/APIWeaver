export interface Query {
  /**
   * resourceId
   */
  resourceId: string;
  /**
   * targetWorkspaceId
   */
  targetWorkspaceId: string;
  /**
   * targetUserId
   */
  targetUserId: string;
  /**
   * isOverWrite
   */
  isOverWrite: boolean;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/resourcepackage/export/transfer';
const method = 'put';
