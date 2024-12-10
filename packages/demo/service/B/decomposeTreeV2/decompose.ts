export interface DecomposeInputConfig {
  allDims?: ColumnConfig[];
  componentId?: string;
  cubeId?: string;
  decomposeConfigs?: DecomposeConfig[];
  filters?: SimpleFilters[];
  fullTree?: boolean;
  metric?: ColumnConfig;
  outerQueryParam?: string;
  reportId?: string;
}
export interface DecomposeDataResult {
  autoConnect?: boolean;
  caption?: string;
  children?: DecomposeDataResult[];
  dimFieldId?: string;
  dimValue?: string;
  metricValue?: string;
}
export interface ColumnConfig {
  aggregator?: string;
  fieldId?: string;
  order?: string;
}
export interface DecomposeConfig {
  autoType?: number;
  lastFieldId?: string;
  lastValue?: string;
  manualConfig?: ColumnConfig;
}
export interface SimpleFilters {
  aggregator?: string;
  items?: SimpleFilterItems[];
  name?: string;
  operator?: string;
  pathId?: string;
  timeDim?: boolean;
}
export interface Query {
  /**
   * menuId
   */
  menuId?: string;
}

export type Body = DecomposeInputConfig;

/**
 * OK
 */
export type Response = DecomposeDataResult[];

const path = '/api/v2/intelligentize/decompose';
const method = 'post';
