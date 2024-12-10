export interface Schema {
  cubeSchema?: CubeSchemaModel;
  metaModelVersion?: string;
  physicalSchema?: PhysicalSchema;
  schemaExtraInfo?: SchemaExtraInfo;
}
export interface QueryResult {
  advancedResult?: AdvancedResult;
  annotationResult?: AnnotationResult;
  autoInsightResult?: AutoInsightResult;
  cellset?: Cell[][];
  count?: number;
  dataType?: string;
  debugInfo?: DebugInfo[];
  dsId?: string;
  dsType?: string;
  error?: string;
  height?: number;
  isCacheQuery?: string;
  isSmartcubeQuery?: string;
  measureLocation?: string;
  measureSumMap?: object;
  normalResult?: boolean;
  pageCount?: string;
  pageNum?: string;
  pageSize?: string;
  pathKeyMap?: object;
  performanceInfo?: PerformanceDiagnoseRecord;
  pollKey?: string;
  queryCount?: boolean;
  resultValuesCount?: object;
  runtime?: number;
  sqlAdvise?: boolean;
  sqlText?: string;
  timeSeriesResult?: TimeSeriesResult;
  total?: Cell[][];
  width?: number;
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
export interface AdvancedResult {
  anomalyDetectionResults?: AnomalyDetectionResult[];
  clusteringResults?: ClusteringResult[];
  forecastResults?: ForecastResult[];
  summarizeResults?: SummarizeResult[];
  trendLineResults?: TrendLineResult[];
  wordCloudResult?: WordCloudResult;
}
export interface AnnotationResult {
  inflectionPointAnnotationResults?: InflectionPointAnnotationResult[];
  measureThresholdResults?: MeasureThresholdResult[];
}
export interface AutoInsightResult {
  content?: AutoInsightResultContent;
  key?: string;
}
export interface Cell {
  p?: object;
  t?: string;
  v?: string;
}
export interface DebugInfo {
  connectDBDuration?: number;
  createTime?: number;
  cubeId?: string;
  extraInfo?: object;
  logView?: string;
  pollKey?: string;
  queryDuration?: number;
  queryEndTime?: number;
  queryId?: string;
  queryStartTime?: number;
  sql?: string;
}
export interface PerformanceDiagnoseRecord {
  componentId?: string;
  converted?: boolean;
  cubeId?: string;
  endTimeOfServer?: number;
  extraInfo?: object;
  reportId?: string;
  sqlRecords?: PerformanceDiagnoseSQLRecord[];
  stages?: object;
  startTimeOfServer?: number;
  supportSqlAdvise?: boolean;
  traceId?: string;
}
export interface TimeSeriesResult {
  contrastLineResults?: ContrastLineResult[];
}
export interface Query {
  /**
   * olapQueryParam
   */
  olapQueryParam: string;
  /**
   * workspaceId
   */
  workspaceId: string;
}

export type Body = Schema;

/**
 * OK
 */
export type Response = QueryResult;

const path = '/api/v2/biPlatform/query/queryWithSchema';
const method = 'post';
