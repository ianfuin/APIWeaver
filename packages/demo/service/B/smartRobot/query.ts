export interface SmartRobotSplitResultModel {
  candidates?: SmartRobotSplitResultModel[];
  columnId?: string;
  columnName?: string;
  end?: number;
  question_value?: string;
  score?: number;
  start?: number;
  type?: string;
  value?: string;
}
export interface SmartRobotQueryResultModel {
  errorInfo?: string;
  olapQueryParam?: string;
  queryResult?: QueryResult;
  resultType?: number;
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
export interface Query {
  /**
   * question
   */
  question: string;
  /**
   * cubeId
   */
  cubeId?: string;
  /**
   * robotId
   */
  robotId: string;
}

export type Body = SmartRobotSplitResultModel[];

/**
 * OK
 */
export type Response = SmartRobotQueryResultModel;

const path = '/api/v2/smart/robot/query';
const method = 'post';
