export interface BatchCubeQueryModel {
  allDisplay?: boolean;
  cubeIds?: string[];
  shadows?: CubeSchemaModel[];
}
export interface CubeSchemaModel {
  caption?: string;
  cubeId?: string;
  datasourceId?: string;
  fieldTree?: CubeFieldTreeNode[];
  fields?: CubeFieldModel[];
  filter?: CubeFilterModel[];
  fromPanel?: boolean;
  params?: CubeParamModel[];
  sqlPlaceholders?: SqlPlaceholderModel[];
  uniqueId?: string;
}

export type Body = BatchCubeQueryModel;

/**
 * OK
 */
export type Response = object;

const path = '/api/v2/dataset/getSchemaByCubeList';
const method = 'post';
