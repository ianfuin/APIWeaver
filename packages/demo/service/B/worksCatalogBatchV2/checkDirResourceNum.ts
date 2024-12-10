export interface Query {
  /**
   * worksType
   */
  worksType: string;
  /**
   * workspaceId
   */
  workspaceId: string;
}

export type Body = string[];

/**
 * OK
 */
export type Response = object;

const path = '/api/v2/catalogBatch/checkDirResourceNum';
const method = 'put';
