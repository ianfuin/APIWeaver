export interface Query {
  /**
   * 工作空间ID, 必传
   */
  workspaceId?: string;
}

export interface Path {
  /**
   * prodid
   */
  prodid: string;
  /**
   * platform
   */
  platform: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/works/issue/{prodid}/{platform}';
const method = 'delete';
