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
export type Response = boolean;

const path = '/api/v2/lock/{workType}/{workId}';
const method = 'put';
