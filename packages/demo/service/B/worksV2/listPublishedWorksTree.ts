export interface WorksTreeVO {
  worksId?: string;
  worksName?: string;
}
export interface Query {
  /**
   * keyword
   */
  keyword?: string;
}

export interface Path {
  /**
   * workspaceId
   */
  workspaceId: string;
  /**
   * worksType
   */
  worksType: string;
}

/**
 * OK
 */
export type Response = WorksTreeVO[];

const path = '/api/v2/works/{worksType}/tree/{workspaceId}';
const method = 'get';
