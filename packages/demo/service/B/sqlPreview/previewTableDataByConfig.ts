export interface TableMetaByConfigParam {
  connConfig?: ConnectionConfig;
  fuzzyTableName?: string;
  pageNum?: number;
  pageSize?: number;
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
export interface ConnectionConfig {
  accessId?: string;
  accessKey?: string;
  address?: string;
  authLevel?: number;
  belongType?: number;
  config?: ConnectionInfoConfig;
  creatorId?: string;
  dsCreateOrigin?: number;
  dsId?: string;
  dsType?: string;
  dsVersion?: string;
  encoded?: boolean;
  instance?: string;
  instanceId?: string;
  loginTicket?: string;
  modifyUser?: string;
  noSasl?: boolean;
  organizationId?: string;
  password?: string;
  port?: string;
  project?: string;
  region?: string;
  schema?: string;
  showName?: string;
  userName?: string;
  workspaceId?: string;
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

export type Body = TableMetaByConfigParam;

/**
 * OK
 */
export type Response = QueryResult;

const path = '/api/v2/sql/table/preview';
const method = 'post';
