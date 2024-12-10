export interface UsageAnalysisOfResourceModel {
  resourceCount?: number;
  resourceType?: string;
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
export type Response = UsageAnalysisOfResourceModel[];

const path = '/api/v2/auditlog/analysis/usage/countByResource';
const method = 'get';
