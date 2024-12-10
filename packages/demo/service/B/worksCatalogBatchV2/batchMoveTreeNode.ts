export interface TreeResourceVO {
  resourceId?: string;
  worksType?: string;
}
export interface Query {
  /**
   * newPid
   */
  newPid: string;
  /**
   * typeCode
   */
  typeCode?: string;
  /**
   * workspaceId
   */
  workspaceId: string;
}

export type Body = TreeResourceVO[];

/**
 * OK
 */
export type Response = string[];

const path = '/api/v2/catalogBatch/moveFolder';
const method = 'put';
