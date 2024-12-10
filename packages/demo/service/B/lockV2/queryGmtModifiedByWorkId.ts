export interface Path {
  /**
   * workType
   */
  workType: string;
  /**
   * workId
   */
  workId: string;
}

/**
 * OK
 */
export type Response = string;

const path = '/api/v2/lock/modifiedTime/{workType}/{workId}';
const method = 'get';
