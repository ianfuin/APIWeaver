export interface Query {
  /**
   * belongType
   */
  belongType?: number;
  /**
   * workspaceId
   */
  workspaceId?: string;
}

export interface Path {
  /**
   * dsId
   */
  dsId: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/restapi/datasource/{dsId}';
const method = 'delete';
