export interface CubeFolderModel {
  comment?: string;
  parentSchemaId?: string;
  schemaId?: string;
  schemaName?: string;
}
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
export type Body = CubeFolderModel;

/**
 * OK
 */
export type Response = string;

const path = '/api/v2/schema/rename/{schemaId}';
const method = 'put';
