export interface WorksCountDO {
  count?: number;
  worksType?: string;
}

export interface Path {
  /**
   * workspaceId
   */
  workspaceId: string;
}

/**
 * OK
 */
export type Response = WorksCountDO[];

const path = '/api/v2/resourcepackage/export/workspace/total/{workspaceId}';
const method = 'get';
