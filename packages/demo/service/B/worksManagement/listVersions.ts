export interface WorksVersionItem {
  owner?: string;
  publishStatus?: number;
  version?: number;
  worksId?: string;
  workspaceId?: string;
}
export interface Query {
  /**
   * worksId
   */
  worksId: string;
}

/**
 * OK
 */
export type Response = WorksVersionItem[];

const path = '/api/v2/version-manage/listVersions';
const method = 'get';
