export interface Query {
  /**
   * tableAlias
   */
  tableAlias: string;
  /**
   * workspaceId
   */
  workspaceId: string;
}

/**
 * OK
 */
export type Response = boolean;

const path = '/api/v2/mix/table/existTableAlias';
const method = 'get';
