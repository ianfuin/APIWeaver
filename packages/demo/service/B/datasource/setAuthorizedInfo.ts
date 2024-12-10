export interface DataSourceAuthorizedModel {
  authorizedUseType?: number;
  dsId?: string;
}
export interface Query {
  /**
   * workspaceId
   */
  workspaceId?: string;
}

export type Body = DataSourceAuthorizedModel;

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/datasource/authorizing';
const method = 'put';
