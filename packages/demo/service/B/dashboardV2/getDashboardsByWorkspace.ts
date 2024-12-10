export interface DashboardDTO {
  gmtCreate?: number;
  gmtModified?: number;
  id?: string;
  inFavorite?: boolean;
  name?: string;
  ownerId?: string;
  ownerName?: string;
  publishStatus?: number;
  type?: string;
  workspaceId?: string;
  workspaceName?: string;
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
export type Response = DashboardDTO[];

const path = '/api/v2/dashboard/{workspaceId}/list';
const method = 'get';
