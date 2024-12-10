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
export interface CubeFieldTreeNode {
  caption?: string;
  children?: CubeFieldTreeNode[];
  flag?: string;
  fromPanel?: boolean;
  id?: string;
  refUniqueId?: string;
  type?: string;
}
export interface CubeFieldModel {
  attributes?: FieldAttributeModel[];
  calculateMember?: boolean;
  caption?: string;
  column?: string;
  comments?: string;
  fromPanel?: boolean;
  name?: string;
  table?: string;
  type?: string;
  uniqueId?: string;
}
export interface CubeFilterModel {
  beforeJoin?: boolean;
  filterElements?: FilterModel[];
  filters?: CubeFilterModel[];
  logicalOperator?: string;
  tableId?: string;
}
export interface CubeParamModel {
  caption?: string;
  defaultValue?: string[];
  disable?: boolean;
  fromPanel?: boolean;
  name?: string;
  originalType?: string;
  style?: string;
  table?: string;
  type?: string;
  uniqueId?: string;
  useInGlobal?: boolean;
  values?: string[];
}
export interface SqlPlaceholderModel {
  caption?: string;
  conditionPlaceHolderFields?: ConditionPlaceHolderField[];
  defaultValue?: string[];
  firstDayOfWeek?: number;
  format?: string;
  fromPanel?: boolean;
  name?: string;
  originalType?: string;
  style?: string;
  type?: string;
  uniqueId?: string;
  useInGlobal?: boolean;
}

export type Body = Schema;

/**
 * OK
 */
export type Response = CubeSchemaModel;

const path = '/api/v2/dataset/extractShadow';
const method = 'post';
