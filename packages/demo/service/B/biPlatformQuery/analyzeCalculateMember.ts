export interface SchemaWithAttrId {
  attrId?: string;
  cube?: Schema;
  cubeId?: string;
  cubeShadow?: CubeSchemaModel;
  reportId?: string;
  workspaceId?: string;
}
export interface CalcAnalysisResult {
  dataType?:
    | 'STRING'
    | 'DATE'
    | 'DATETIME'
    | 'TIME'
    | 'NUMBER'
    | 'BOOLEAN'
    | 'GEOGRAPHIC'
    | 'URL'
    | 'IMAGE_URL'
    | 'MULTIVALUE';
  errorLine?: number;
  hasError?: boolean;
  message?: string;
}
export interface Schema {
  cubeSchema?: CubeSchemaModel;
  metaModelVersion?: string;
  physicalSchema?: PhysicalSchema;
  schemaExtraInfo?: SchemaExtraInfo;
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

export type Body = SchemaWithAttrId;

/**
 * OK
 */
export type Response = CalcAnalysisResult;

const path = '/api/v2/biPlatform/query/analyzeCalculateMember';
const method = 'post';
