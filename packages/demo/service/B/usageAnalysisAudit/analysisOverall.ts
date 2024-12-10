export interface UsageAnalysisOverallModel {
  /**
   * 不同资源类型
   */
  resourceInfos?: ResourceUsageInfo[];
  /**
   * 资源总数
   */
  totalResource?: number;
}
export interface ResourceUsageInfo {
  /**
   * 资源类型
   */
  resourceType?: string;
  /**
   * 是否支持当前资源
   */
  support?: boolean;
  /**
   * 资源总数
   */
  total?: number;
  /**
   * 已用资源数
   */
  used?: number;
}
export interface Query {
  /**
   * needCache
   */
  needCache?: boolean;
}

/**
 * OK
 */
export type Response = UsageAnalysisOverallModel;

const path = '/api/v2/auditlog/analysis/usage/analysisOverall';
const method = 'get';
