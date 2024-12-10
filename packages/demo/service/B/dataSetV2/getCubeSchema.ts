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
export interface Query {
  /**
   * cubeId
   */
  cubeId: string;
  /**
   * worksId
   */
  worksId?: string;
}

/**
 * OK
 */
export type Response = CubeSchemaModel;

const path = '/api/v2/dataset/cubeSchema';
const method = 'get';
