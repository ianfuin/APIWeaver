export interface Query {
  /**
   * isCheckOrgAdmin
   */
  isCheckOrgAdmin?: boolean;
  /**
   * workspaceId
   */
  workspaceId?: string;
}

export interface Path {
  /**
   * 数据门户id
   */
  dataPortalId: string;
}

/**
 * OK
 */
export type Response = object;

const path = '/api/v2/dataportal/new/{dataPortalId}';
const method = 'get';
