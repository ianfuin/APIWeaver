export interface SchemaConfigDO {
  comments?: string;
  createorId?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  modifyUser?: string;
  modifyUserName?: string;
  ownerName?: string;
  parentSchemaId?: string;
  publishType?: string;
  schemaId?: string;
  showName?: string;
  workspaceId?: string;
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
export type Response = SchemaConfigDO[];

const path = '/api/v2/schema/list';
const method = 'get';
