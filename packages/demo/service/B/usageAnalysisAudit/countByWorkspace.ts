export interface UsageAnalysisOfWorkspaceModel {
  resourceCount?: number;
  workspaceId?: string;
  workspaceName?: string;
}
export interface Query {
  /**
   * resourceType
   */
  resourceType?: string;
}

/**
 * OK
 */
export type Response = UsageAnalysisOfWorkspaceModel[];

const path = '/api/v2/auditlog/analysis/usage/countByWorkspace';
const method = 'get';
