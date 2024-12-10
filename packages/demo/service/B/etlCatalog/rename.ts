export interface EtlCatalogUpdateModel {
  description?: string;
  etlId?: string;
  name?: string;
  newOwnerId?: string;
  resourceType?: string;
  workspaceId?: string;
}

export type Body = EtlCatalogUpdateModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/etl/attr/update';
const method = 'post';
