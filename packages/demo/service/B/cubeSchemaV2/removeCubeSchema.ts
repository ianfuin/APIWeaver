export interface Query {
  /**
   * workspaceId
   */
  workspaceId: string;
}

export interface Path {
  /**
   * schemaId
   */
  schemaId: string;
}

/**
 * OK
 */
export type Response = string;

const path = '/api/v2/schema/remove/{schemaId}';
const method = 'delete';
