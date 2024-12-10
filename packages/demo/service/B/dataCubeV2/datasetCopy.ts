export interface DatasetCopyModel {
  datasetName?: string;
  originDatasetId?: string;
  targetCatalogId?: string;
  targetDatasetId?: string;
  targetWorkspaceId?: string;
}

export type Body = DatasetCopyModel;

/**
 * OK
 */
export type Response = string;

const path = '/api/v2/datacube/copy';
const method = 'post';
