export interface InsightResult {
  currentDate?: string;
  currentTotalValue?: number;
  insightId?: string;
  lastDate?: string;
  lastTotalValue?: number;
  measureDecomposeInsightItems?: MeasureDecomposeResultItem[];
  message?: string;
  negativeInsightItems?: InsightResultItem[];
  positiveInsightItems?: InsightResultItem[];
  status?: string;
  totalDiffRatio?: number;
  totalDiffRatioString?: string;
  totalDiffValue?: number;
}
export interface MeasureDecomposeResultItem {
  contributionRatio?: number;
  currentValue?: number;
  diffRatio?: number;
  diffValue?: number;
  lastValue?: number;
  measureName?: string;
}
export interface InsightResultItem {
  contributionRatio?: number;
  currentValue?: number;
  diffRatio?: number;
  diffRatioString?: string;
  diffValue?: number;
  dimensionName?: string;
  dimensionValueName?: string;
  lastValue?: number;
}

/**
 * OK
 */
export type Response = InsightResult;

const path = '/api/v2/insight/testQuickInsight';
const method = 'get';
