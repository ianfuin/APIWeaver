export interface WorksCountDO {
  count?: number;
  worksType?: string;
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
export type Response = WorksCountDO[];

const path = '/api/v2/workspublish/export/count/{resourceId}';
const method = 'get';
