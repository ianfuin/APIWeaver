export interface CubeSchemaTreeVO {
  authLevel?: number;
  authorizedUseType?: number;
  children?: CubeSchemaTreeVO[];
  hasAuthorizedUse?: boolean;
  id?: string;
  showName?: string;
  smartRobotLastSyncTime?: string;
  smartRobotSyncStatus?: number;
  workType?: string;
}
export interface Query {
  /**
   * workspaceId
   */
  workspaceId: string;
}

/**
 * OK
 */
export type Response = CubeSchemaTreeVO;

const path = '/api/v2/dataset/getFullCubeCatalog';
const method = 'get';
