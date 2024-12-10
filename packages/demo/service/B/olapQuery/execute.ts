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
   * reportId
   */
  reportId?: string;
  /**
   * menuId
   */
  menuId?: string;
  /**
   * componentId
   */
  componentId?: string;
  /**
   * componentType
   */
  componentType?: number;
}

/**
 * OK
 */
export type Response = QueryResult;

const path = '/api/v2/olap/query';
const method = 'post';
