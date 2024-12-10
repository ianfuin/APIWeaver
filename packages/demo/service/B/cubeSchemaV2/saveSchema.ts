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

export type Body = CubeFolderModel;

/**
 * OK
 */
export type Response = string;

const path = '/api/v2/schema/save';
const method = 'post';
