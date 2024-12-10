export interface CubeSimpleInfoModel {
  authorizedUseType?: number;
  cubeId?: string;
  cubeShowName?: string;
  hasAuthorizedUse?: boolean;
  key?: string;
  value?: string;
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
export type Response = CubeSimpleInfoModel[];

const path = '/api/v2/dataset/listName/{workspaceId}';
const method = 'get';
