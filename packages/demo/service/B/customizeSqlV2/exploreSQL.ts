export interface CustomSqlVO {
  datasourceId?: string;
  encoded?: boolean;
  params?: CubeParamModel[];
  schema?: Schema;
  sql?: string;
  sqlPlaceholders?: SqlPlaceholderModel[];
}
export interface TableSchema {
  datasourceId?: string;
  fieldTree?: string[];
  fields?: TableField[];
  sql?: string;
  sqlId?: string;
  tableName?: string;
  tableType?: string;
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
export interface Schema {
  cubeSchema?: CubeSchemaModel;
  metaModelVersion?: string;
  physicalSchema?: PhysicalSchema;
  schemaExtraInfo?: SchemaExtraInfo;
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
export interface TableField {
  columnAlias?: string;
  columnExpr?: string;
  columnType?: string;
}

export type Body = CustomSqlVO;

/**
 * OK
 */
export type Response = TableSchema;

const path = '/api/v2/customsql/explore';
const method = 'post';
