export interface AttributionInputParam {
  aggregationType?: string;
  cubeId?: string;
  dimensionId?: string;
  dimensionMap?: object;
  extraInfo?: object;
  firstDimValue?: string;
  measureId?: string;
  secondDimValue?: string;
  subjectList?: string[];
  taskId?: string;
}
export interface AttributionResult {
  attributionInputParam?: AttributionInputParam;
  deltaRatioTotal?: number;
  deltaRatioTotalString?: string;
  deltaValueTotal?: number;
  firstValueTotal?: number;
  message?: string;
  secondValueTotal?: number;
  status?: string;
  subjectList?: SubjectValueDelta[];
  subjectListNegative?: SubjectValueDelta[];
  subjectListPositive?: SubjectValueDelta[];
  taskId?: string;
}
export interface SubjectValueDelta {
  contributionRadio?: number;
  deltaRatio?: number;
  deltaRatioString?: string;
  deltaValue?: number;
  firstValue?: number;
  secondValue?: number;
  subjectId?: string;
  subjectName?: string;
  subjectValueName?: string;
}

export type Body = AttributionInputParam;

/**
 * OK
 */
export type Response = AttributionResult;

const path = '/api/v2/attributionAnalysis/get';
const method = 'post';
