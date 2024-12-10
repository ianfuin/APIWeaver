export interface SimpleCubeVO {
  authLevel?: number;
  authorizedUseType?: number;
  createTime?: string;
  creatorId?: string;
  cubeId?: string;
  cubeName?: string;
  dsId?: string;
  hasAuthorizedUse?: boolean;
  modifiedTime?: string;
  modifierId?: string;
  schemaId?: string;
  smartRobotLastSyncTime?: string;
  smartRobotSyncStatus?: number;
  workspaceId?: string;
}
export interface Query {
  /**
   * workspaceId
   */
  workspaceId: string;
  /**
   * keyword
   */
  keyword?: string;
}

/**
 * OK
 */
export type Response = SimpleCubeVO[];

const path = '/api/v2/catalog/cubes';
const method = 'get';
