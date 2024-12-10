export interface WorksVO {
  worksId?: string;
  worksName?: string;
  worksType?: string;
}
export interface Query {
  /**
   * workspaceId
   */
  workspaceId: string;
  /**
   * worksType
   */
  worksType?: string;
  /**
   * keyword
   */
  keyword?: string;
}

/**
 * OK
 */
export type Response = WorksVO[];

const path = '/api/v2/monitor/metric/queryWorksCreatedMonitor';
const method = 'get';
