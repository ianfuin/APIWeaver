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

const path = '/restapi/lock/{workType}/{workId}';
const method = 'put';
