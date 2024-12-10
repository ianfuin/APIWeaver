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
export interface PhysicalSchema {
  links?: TableLinkModel[];
  sqlHintTypes?: string[];
  sqlHints?: SqlHintModel[];
  tables?: CubeTableModel[];
  virtualTables?: CubeVirtualTableModel[];
}
export interface SchemaExtraInfo {
  aggFunctions?: string[];
  aimDirId?: string;
  authorizedUseType?: number;
  cubeType?: string;
  dataLevelAttributeIds?: string[];
  dataLoadMode?: number;
  dsCreateOrigin?: number;
  etlGenerateCube?: boolean;
  hasAuthorizedUse?: boolean;
  isDataMaskOpen?: number;
  isOpenColumnLevelPermission?: number;
  isOpenRowLevelPermission?: number;
  permissionList?: string[];
  rowLevelType?: number;
  withoutColumnLevelPermissionFields?: string[];
}
export interface Query {
  /**
   * cubeId
   */
  cubeId: string;
  /**
   * allDisplay
   */
  allDisplay?: boolean;
  /**
   * worksId
   */
  worksId?: string;
}

/**
 * OK
 */
export type Response = Schema;

const path = '/api/v2/dataset/schema';
const method = 'get';
