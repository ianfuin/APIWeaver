export interface CubeResultModel {
  availableForIndependentOlap?: boolean;
  cube?: Cube;
  cubeGmtModified?: string;
  isSnowFlake?: boolean;
}
export interface Cube {
  acrossDs?: boolean;
  aggFunctions?: string[];
  authorizedUseType?: number;
  calculatedMember?: CalculatedMember[];
  caption?: string;
  creatorId?: string;
  cubeId?: string;
  datasouceId?: string;
  dateFormats?: string[];
  description?: string;
  dimDsId?: string;
  dimensions?: Dimension[];
  dsCreateOrigin?: number;
  dsType?: string;
  facTable?: CubeTable;
  hasAuthorizedUse?: boolean;
  isChildCube?: boolean;
  isDataMaskOpen?: number;
  isOpenColumnLevelPermission?: number;
  isOpenRowLevelPermission?: number;
  isSupportSQLOptimization?: number;
  measures?: Measure[];
  name?: string;
  olapMetaDrillGroup?: DrillGroup[];
  olapMetaMeasureGroup?: MeasureGroup[];
  pathId?: string;
  permissionList?: string[];
  rowLevelType?: number;
  sqlBeforeTypes?: string[];
  sqlHints?: SqlHintModel[];
  sqlParams?: SqlParam[];
  sqlPlaceholders?: SqlPlaceholder[];
  version?: string;
}
export interface Query {
  /**
   * cubeId
   */
  cubeId: string;
  /**
   * dashboardId
   */
  dashboardId?: string;
  /**
   * allDisplay
   */
  allDisplay?: boolean;
}

/**
 * OK
 */
export type Response = CubeResultModel;

const path = '/api/v2/dataset/content';
const method = 'get';
