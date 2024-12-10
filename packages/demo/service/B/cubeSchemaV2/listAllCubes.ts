export interface CubeSimpleInfoModel {
  authorizedUseType?: number;
  cubeId?: string;
  cubeShowName?: string;
  hasAuthorizedUse?: boolean;
  key?: string;
  value?: string;
}
export interface Query {
  /**
   * workspaceId
   */
  workspaceId: string;
  /**
   * limit
   */
  limit?: number;
  /**
   * keyword
   */
  keyword: string;
}

/**
 * OK
 */
export type Response = CubeSimpleInfoModel[];

const path = '/api/v2/schema/listAllCubes';
const method = 'get';
